/**
 * Created by Сергей on 10.05.2017.
 */
var recallPass = require("./recallPass");

var arr2 = recallPass.recallPass(["X...","..X.","X..X","...."],["itdf","gdce","aton","qrdi"]);
console.log( "Correct Answer: icantforgetiddqd ");
console.log( arr2==="icantforgetiddqd");
console.log("Your Answer: icanddqdgetitfor ")
console.log(arr2==="icanddqdgetitfor");

arr2 = recallPass.recallPass(["....","X..X",".X..","...X"],["xhwc","rsqx","xqzz","fyzr"]);
console.log( "Correct Answer: rxqrwsfzxqxzhczy ");
console.log(arr2==="rxqrwsfzxqxzhczy");
console.log("Your Answer: rxqrwsfzxqxzhczy ")
console.log(arr2==="rxqrwsfzxqxzhczy");

arr2 = recallPass.recallPass(["X...",".X..","..X.","...X"],["aaaa","aaaa","aaaa","aaaa"]);
console.log("Correct Answer: aaaaaaaaaaaaaaaa ");
console.log(  arr2==="aaaaaaaaaaaaaaaa");
console.log("Your Answer: aaaaaaaaaaaaaaaa");
console.log(arr2==="aaaaaaaaaaaaaaaa");

arr2 = recallPass.recallPass(["X..X","....","....","X..X"],["abcd","efgh","ijkl","mnop"]);
console.log("Correct Answer: admpadmpadmpadmp ");
console.log(  arr2==="admpadmpadmpadmp");
console.log("Your Answer: admpadmpadmpadmp");
console.log(arr2==="admpadmpadmpadmp");

arr2 = recallPass.recallPass(["....",".XX.",".XX.","...."],["abcd","efgh","ijkl","mnop"]);
console.log("Correct Answer: fgjkfgjkfgjkfgjk ");
console.log(  arr2==="fgjkfgjkfgjkfgjk");
console.log("Your Answer: fgjkfgjkfgjkfgjk");
console.log(arr2==="fgjkfgjkfgjkfgjk");

arr2 = recallPass.recallPass(["X...",".X..","..X.","...X"],["azbx","azbx","azbx","azbx"]);
console.log("Correct Answer: azbxxbzaazbxxbza ");
console.log(  arr2==="azbxxbzaazbxxbza");
console.log("Your Answer: azbxxbzaazbxxbza");
console.log(arr2==="azbxxbzaazbxxbza");

arr2 = recallPass.recallPass(["XXXX","....","....","...."],["call","rsqi","epzn","yeee"]);
console.log("Correct Answer: calllineyeeecrey ");
console.log(  arr2==="calllineyeeecrey");
console.log("Your Answer: callcreyyeeeline");
console.log(arr2==="callcreyyeeeline");

arr2 = recallPass.recallPass(["X...","X...","X...","X..."],["call","rsqi","epzn","yeee"]);
console.log("Correct Answer: creycalllineyeee ");
console.log(  arr2==="creycalllineyeee");
console.log("Your Answer: creyyeeelinecall");
console.log(arr2==="creyyeeelinecall");

arr2 = recallPass.recallPass([".......","..X....","....X..",".X.....",".....X.","X..X...",".....X."],["loremip","sumdolo","rsitame","tconsec","teturad","ipiscin","gelitqu"]);
console.log("Correct Answer: macaisqodmcriiodosetcooieesq ");
console.log( arr2==="macaisqodmcriiodosetcooieesq");
console.log("Your Answer: macaisqodmcriiodosetcooieesq");
console.log(arr2==="macaisqodmcriiodosetcooieesq");

arr2 = recallPass.recallPass(["...X.",".X...","...X.",".X...","...X."],["Qwert","aSdfg","zXSVb","yuiop","ghjkl"]);
console.log("Correct Answer: rSVukadguowfXohSfyip ");
console.log( arr2==="rSVukadguowfXohSfyip");
console.log("Your Answer: rSVukSfyipwfXohadguo");
console.log(arr2==="rSVukSfyipwfXohadguo");

arr2 = recallPass.recallPass([".X...",".X...","..X..",".X...",".X..."],["QWERT","ASDFG","ZXCVB","YUIOP","GHJKL"]);
console.log("Correct Answer: WSCUHCYUOPRFCOKASFGC");
console.log( arr2==="WSCUHCYUOPRFCOKASFGC");
console.log("Your Answer: WSCUHASFGCRFCOKCYUOP");
console.log(arr2==="WSCUHASFGCRFCOKCYUOP");


