/**
 * Created by Сергей on 24.05.2017.
 */

var uniq = require("./nonUnique");

var arr = uniq.nonUniq([1, 2, 3, 1, 3]);
console.log(arr);

var arr = uniq.nonUniq([5, 5, 5, 5, 5]);
console.log(arr);

var arr = uniq.nonUniq([1, 2, 3, 4, 5]);
console.log(arr);

var arr = uniq.nonUniq([10, 9, 10, 10, 9, 8]);
console.log(arr);

var arr = uniq.nonUniq(['a', 9, 'A', 10, 9, 8]);
console.log(arr);

var arr = uniq.nonUniq(['a', 9, 'A', 10, 'Ada', 9, 8, 'aDa']);
console.log(arr);

var arr = uniq.nonUniq(['a', 9, 'A', 10, 'Ada', 9, 8, "Agd"]);
console.log(arr);

var arr = uniq.nonUniq(['a', 9, 'A', 10, 'Ada', 9, "adA", 8, "Agd","aDa"]);
console.log(arr);
