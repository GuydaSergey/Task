/**
 * Created by Сергей on 24.05.2017.
 */

function nonUnique() {
    const arr = [...arguments];
    return arr.reduce(function (prev, curr, index) {
         if (stringCase(arr, curr, index)) {
            prev.push(curr);
         }
        return prev;
    }, []);
}

function stringCase(arr, value, index) {
    let flag = false;
    arr.forEach(function (row, id) {
            if (row.length == value.length && id !== index) {
                let i = 0;
                if (value == row) {
                    flag = true;
                }
                let flag2 = false;
                while (i < row.length) {
                    if (value.charAt(i).toUpperCase() == row.charAt(i).toUpperCase()) {
                        flag2 = true;
                    } else if (value.charAt(i).toLowerCase() == row.charAt(i).toLowerCase()) {
                        flag2 = true;
                    }
                    else {
                        flag2 = false;
                        break;
                    }
                    i++;
                }
                if (flag2) {
                    flag = flag2
                }
                ;
            }
        });
    return flag;
}
function extremeNonUnique () {
    const src = [...arguments];
    return src.map((v) => typeof(v) === 'string' ? v.toLowerCase() : v).reduce((dst, v, i, a) => a.indexOf(v) !== a.lastIndexOf(v) ? [...dst, src[i]] : dst, [])
}
exports.nonUnique = nonUnique;
exports.extremeNonUnique = extremeNonUnique;