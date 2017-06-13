/**
 * Created by Сергей on 26.05.2017.
 */

function checkGrid() {
    const arr = [...arguments];
    let res = [];
    arr.reduce((pr, cr) => {
        Array.isArray(pr[0]) ? res.push([checkGrid(pr)]) :
            pr.forEach((val, idx) => {
                res.push([val !== pr[idx + 1] && val !== cr[idx]])
            });
        return pr = cr;
    });
    return res.every((val) => {
        return val[0] !== false
    });
}

exports.checkGrid = checkGrid;