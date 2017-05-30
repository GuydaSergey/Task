/**
 * Created by Сергей on 22.05.2017.
 */

function transpose() {
    const mas = [...arguments];
    return mas.reduce(function (prev,curr,index) {
        if(index===0) {
            prev=(curr.map(function (value) {
                return [value];
            }));
        }
        else {
            curr.forEach(function (value,id) {
                prev[id].push(value);
            });
        }
        return prev;
    },[]);
}
exports.transpose = transpose;

