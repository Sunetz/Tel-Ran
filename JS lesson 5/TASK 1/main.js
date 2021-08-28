let results = []
document.write('<h1 style = "text-align:center">PIFAGOR TABLE</h1>');
document.write('<table border="1" cellspacing = "0" cellpading = "5" align = "center">');
for(let i = 1; i<=10; i++){
    if (i === 1){
        document.write('<tr style = "background-color: lightgrey">');
    }
    else{
    document.write('<tr>');
    }
    results[i] = [];
        for(let j =1; j<=10; j++){
            results[i][j] = i*j;
            if (j === 1){
                document.write('<th width = 100px; style = "background-color: lightgrey">'+ results[i][j] +'</th>');

            }
            else{
            document.write('<td width = "100px" align = "center">'+ results[i][j] +'</td>');
            }
        }
        document.write('</tr>')
}
document.write('</table>')





let num1 = +prompt('Enter number from 1 to 10');
let num2 = +prompt('Enter number from 1 to 10');

let numbers1 = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten'
}
let numbers2 = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten'
    }   
alert(numbers1[num1] + ' times ' + numbers2[num2] + ' makes ' + results[num1][num2])