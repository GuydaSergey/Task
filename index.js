/**
 * Created by user on 30.05.2017.
 */
const CheckioTask = require('./checkio/checkio');
const completedTasks = [
    {fn: require('./ListCombination'), name: 'checkio-empire-list-combination'},
    {fn: require('./MatrixTranspose'), name: 'checkio-empire-matrix-transpose'},
    {fn: require('./NonUniqueElements'), name: 'checkio-empire-non-unique-elements'},
    {fn: require('./RecallPassword'), name: 'checkio-empire-vault-password'},
    {fn: require('./StructPattern'), name: 'checkio-empire-structure-pattern'}
];
console.log(`Running tests for ${completedTasks[process.argv[2]].name}`);
setTimeout(() => {
    CheckioTask.runTest(completedTasks[process.argv[2]].fn, completedTasks[process.argv[2]].name).then((result) => {
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
        })
    });
}, 1000);
