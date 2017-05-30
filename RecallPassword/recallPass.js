/**
 * Created by Сергей on 10.05.2017.
 */

function recallPass(grille , arrPass) {

    var password = '';
    var valueRevers = 0;
    do
    {
        var arrPosition=[0,0];
        var revers =0;
        while(true) {
            arrPosition = returPosition(arrPosition, grille);
            if(arrPosition===undefined)
                break;
            password = password+arrPass[arrPosition[0]][arrPosition[1] - 1];
        }
        if(arrPass[revers][0].toUpperCase()!==arrPass[revers][0])
            grille= reversGrille(grille);
        else
        {
            for(var i =0;i<3;i++)
            { grille= reversGrille(grille); }
        }
        revers++;
        valueRevers++;
    }while (valueRevers<4);
    return password;
}

function reversGrille(grille) {

    var myArray =  new Array(grille.length);
    for (var i = 0; i<grille.length;i++)
    {
        myArray[i]= new Array(grille[i].length);
        var row =0;
        for (var j = grille[i].length-1;j>=0;j-- )
        {
            myArray[i][row]=grille[j][i];
            row++;
        }
    }
    return myArray;
}

function returPosition(arrPosition,grille) {

    for (var i = arrPosition[0]; i<grille.length;i++)
    {       
        for (var j = arrPosition[1] ;j<grille[i].length;j++ )
        {
            if(grille[i][j]!=='.') {
                arrPosition[0] = i;
                arrPosition[1] = j+1;
                return arrPosition;
            }
        }
        arrPosition[1]=0;
    }
}

exports.recallPass = recallPass;

