/**
 * Created by Сергей on 26.05.2017.
 */

var cristalGrid = require("./crystalGrid");

// console.log( cristalGrid.checkGrid(["X", "Z"], ["Z", "X"]));
//
// console.log( cristalGrid.checkGrid(["X", "X"], ["X", "X"])) ;
//
// console.log( cristalGrid.checkGrid(["X", "Z"], ["X", "Z"])) ;
//
// console.log( cristalGrid.checkGrid(["X", "Z", "X"], ["Z", "X", "Z"], ["X", "Z", "X"]));
//
// console.log( cristalGrid.checkGrid(['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
//     ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
//     ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
//     ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
//     ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
//     ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X']));
//
// console.log( cristalGrid.checkGrid(['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'], ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'], ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'], ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'], ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
//     ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z']));

// console.log( cristalGrid.checkGrid([[['X', 'Z'], ['Z', 'X']], [['Z', 'X'], ['X', 'Z']]]));
//
// console.log( cristalGrid.checkGrid([[['X', 'Z'], ['Z', 'X']], [['X', 'Z'], ['Z', 'X']]]));

module.exports = cristalGrid.checkGrid;