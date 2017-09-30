/**
 * Created by Сергей on 14.06.2017.
 */

function weakPoint() {
    const arr = [...arguments];
    return arr.reduce((res, curr, ind) => {
        curr.forEach((val, inde) => {
            res[0][ind] === undefined ? res[0][ind] = val : res[0][ind] += val;
            res[1][inde] === undefined ? res[1][inde] = val : res[1][inde] += val;
        });
        return res;
    }, [[], []]).map((ele) => {
        return ele.indexOf(Math.min.apply(null, ele));
    });
}
exports.weakPoint = weakPoint;