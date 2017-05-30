/**
 * Created by Сергей on 22.05.2017.
 */

const matTranspose = require("./matrixTranspose");
// var mas =[[1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]];
// mas = matTranspose.transpose(mas); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
// console.log(mas);
//
// mas = matTranspose.transpose(mas); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
// console.log(mas);
// mas=[[1, 4, 3],
//     [8, 2, 6],
//     [7, 8, 3],
//     [4, 9, 6],
//     [7, 8, 1]];
// mas = matTranspose.transpose(mas) // [[1, 8, 7, 4, 7], [4, 2, 8, 9, 8], [3, 6, 3, 6, 1]]
// console.log(mas);
//
// mas = matTranspose.transpose(mas) // [[1, 8, 7, 4, 7], [4, 2, 8, 9, 8], [3, 6, 3, 6, 1]]
// console.log(mas);
module.exports = matTranspose.transpose;