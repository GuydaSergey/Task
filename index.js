/**
 * Created by user on 30.05.2017.
 */
const CheckioTask = require('./checkio/checkio');

const completedTasks = [
    {fn: require('./ListCombination'), name: 'checkio-empire-list-combination'},
    {fn: require('./MatrixTranspose'), name: 'checkio-empire-matrix-transpose'},
    {fn: require('./NonUniqueElements'), name: 'checkio-empire-non-unique-elements'},
    {fn: require('./RecallPassword'), name: 'checkio-empire-cipher-map'},
    {fn: require('./StructPattern'), name: 'checkio-empire-structure-pattern'},
    {fn: require('./NonUniqueElements/nonUnique').extremeNonUnique, name: 'checkio-empire-non-unique-elements'}
];
if (process.argv[2] === 'test') {
    process.stdin.resume();
    console.log('Choose task to check by typing task number');
    completedTasks.forEach((task, i) => {
        console.log(`${i + 1}. ${task.name}`)
    })
    process.stdin.once('data', (data) => {
        process.stdin.pause();
        let idx = parseInt(data) - 1;
        if (!completedTasks[idx]) {
            console.error(`There is no completed task with given index: ${idx}`);
            process.exit(1);
        }
        console.log(`Running tests for ${completedTasks[idx].name}`);
        setTimeout(() => {
            CheckioTask.runTest(completedTasks[idx].fn, completedTasks[idx].name).then((result) => {
                Object.keys(result).forEach((rank) => {
                    let total = result[rank].reduce((sum, entry) => {
                        if (entry[0] === 'SUCCESS') {
                            ++sum.success;
                        } else {
                            ++sum.failure;
                        }
                        return sum;
                    }, {success: 0, failure: 0});
                    console.log(`${rank.toUpperCase()} +${total.success} / -${total.failure}`);
                });
                process.exit();
            }).catch((err) => {
                console.error(err);
                process.exit(1);
            });
        }, 500);
    })
} else {
    console.error('Unsupported options');
    process.exit(1);
}


