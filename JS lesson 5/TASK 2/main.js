let str = +prompt('Enter your number');
res = ''
for (let i=str; i>=1; i-=1){
    res += (i + ' ');
}
alert(res);