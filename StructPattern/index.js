/**
 * Created by Сергей on 11.05.2017.
 */

var struct = require("./structPatt");

var prov= struct.structPattern(42,"12",2);
console.log(prov);
var prov= struct.structPattern(42,"12a0b3e4",2);
console.log(prov);
prov= struct.structPattern(101,"ab23b4zz",2);
console.log(prov);
prov= struct.structPattern(42,"asD0",3);
console.log(prov);
prov= struct.structPattern(101,"a3F5R",3);
console.log(prov);
prov= struct.structPattern(423,"aSDe ",4);
console.log(prov);
prov= struct.structPattern(1011,"   3 ",4);
console.log(prov);
