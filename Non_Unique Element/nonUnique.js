/**
 * Created by Сергей on 24.05.2017.
 */

function nonUniq(arr) {
    return arr.reduce(function (prev, curr, index) {
        let flag = true;
        if (arr.indexOf(curr, index + 1) !== -1) {
            prev.push(curr);
            flag = false;
        }
        else if (stringCase(arr, curr, index)) {
            prev.push(curr);
            flag = false;
        }
        if (prev.indexOf(curr) !== -1) {
            if (flag) {
                prev.push(curr);
            }
        }
        else if (stringCase(prev, curr)) {
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
                while (i < row.length) {
                    if (value.charAt(i).toUpperCase() == row.charAt(i).toUpperCase()) {
                        flag = true;
                    } else if (value.charAt(i).toLowerCase() == row.charAt(i).toLowerCase()) {
                        flag = true;
                    } else {
                        flag = false;
                        break;
                    }
                    i++;
                }
            }
        });
    return flag;
}
exports.nonUniq = nonUniq;