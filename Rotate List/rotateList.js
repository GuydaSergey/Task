/**
 * Created by Сергей on 29.05.2017.
 */

function rotateList() {
    const arr = [...arguments];
    arr[0].splice(0, arr[1]).forEach((val) => {
        arr[0].push(val);
    });
    return arr[0];
}
exports.rotateList = rotateList;