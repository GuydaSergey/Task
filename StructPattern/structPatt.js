/**
 * Created by Сергей on 11.05.2017.
 */

function structPattern(value,str,rank) {

    var i = parseInt(value,10).toString(rank);
    if(i.length>str.length)
        return false;
    var arr = createArr(i);
    var arrStr= createArr(str);
    while(arr.length<arrStr.length)
    {
        arr.unshift('0');
    }
    return provPettern(arr,arrStr);
}

 function createArr(str) {
     var j=0;
     var mas =[];
     while(j<str.length){
         mas[j]=str[j];
         j++;
     }
     return mas;
 }

function provPettern(arr,arrStr) {

    var flags;
    for(var i =0; i<arr.length;i++) {

        if (arr[i] == 0 && !isNaN(parseInt(arrStr[i],10))) {
             flags = true;
         }
         else if (arr[i] == 1 && isNaN(parseInt(arrStr[i],10))  && arrStr[i].toUpperCase()!=arrStr[i]) {
             flags = true;
         }
        else if (arr[i] == 2 && isNaN(parseInt(arrStr[i],10)) && arrStr[i].toUpperCase()==arrStr[i]) {
             flags = true;
         }
        else if (arr[i] == 3 && isNaN(parseInt(arrStr[i],10)) && arrStr[i]==" ") {
             flags = true;
         }
         else {
             return false;
         }
     }
    return flags;
}
exports.structPattern=structPattern;