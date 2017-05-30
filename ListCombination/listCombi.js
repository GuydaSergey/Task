/**
 * Created by Сергей on 24.05.2017.
 */

function combi(arr,arr2) {
   return arr.reduce(function (prev,curr,index) {
             prev.push(curr,arr2[index]);
        return prev;
    },[])
}
exports.combi=combi;