/**
 * Created by user on 08.08.2016.
 */
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const marked = require('marked');
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

const CHECKIO_PATH = path.join(__dirname, "./../checkio");
class CheckioTask {
    static getTasks () {
        const taskInfo = ['description.md', 'format_io.js.md', 'precondition.md', 'additional.md', 'example.js.md'];
        return fs.readdirAsync(CHECKIO_PATH).then((folders) => {
            const missing = [];
            return Promise.map(folders, (folder) => {
                const infoPath = path.join(CHECKIO_PATH, folder, 'info');
                return Promise.map(taskInfo, (infoFile) => {
                    const field = infoFile.split('.')[0];
                    const fullPath = path.join(infoPath, infoFile);
                    return fs.readFileAsync(fullPath, 'utf-8').reflect();
                }).then((infoBlocks) => {
                    let missingBlocks = infoBlocks.reduce((miss, block, idx) => {
                        if (!block.isFulfilled()) {
                            miss.push({
                                name: taskInfo[idx],
                                error: block.reason()
                            })
                        }
                        return miss;
                    }, []);
                    console.error(missingBlocks.map((block) => `${name}: ${block.error.stack.substr(128)}`).join('\n'));
                    return infoBlocks.filter((block) => block.isFulfilled()).map((block) => block.value()).join('\n');
                })
            }).each((task, idx) => {
                return fs.writeFileAsync(`${folders[idx]}.info`, task, 'utf-8');
            })
        })
    }
    static getTest (taskName) {
        const fullPath = path.join(CHECKIO_PATH, taskName, 'verification/src/tests.py');
        return fs.readFileAsync(fullPath, 'utf-8').then((rawTest) => {
            return JSON.parse(CheckioTask.clearTestJson(rawTest))
        })
    }
    static runTest (targetFn, taskName) {
        return CheckioTask.getTest(taskName).then((fixt) => {
            return Object.keys(fixt).reduce((result, rank) => {
                result[rank] = fixt[rank].map((test) => {
                    let probe = targetFn(...test.input);
                    return [
                        (CheckioTask.assertResult(probe, test.answer) ? 'SUCCESS' : 'FAILURE'),
                        JSON.stringify({'Correct': test.answer}),
                        JSON.stringify({'Yours': probe})
                    ]
                });
                console.log(rank.toUpperCase());
                console.log(result[rank].map((res) => res.join('\n')).join('\n=======\n'));
                return result;
            }, {})
        })
    }
    static clearTestJson (txt) {
        return txt.replace(/[\n\r\w\s\W]+\=\s([\n\r\w\s\W]+)/m, '$1')
            .replace(/\(/mg, '[')
            .replace(/\)/mg, ']')
            .replace(/\,([\r\n\t\s]+)(\]|\})/g, '$1$2')
            .replace(/\'/mg, '"')
            .replace(/True/mg, 'true')
            .replace(/False/mg, 'false')
            .replace(/\\n/mg, '')
    }
    static assertResult(a, b) {
        if (typeof(a) === 'object' && typeof(b) === 'object' && a !== null && b !== null) {
            return JSON.stringify(a) === JSON.stringify(b);
        } else {
            return a === b;
        }
    }
}
module.exports = CheckioTask;