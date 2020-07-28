function maksimum(a, b, c){
    let max=a;

if(b>max){
   max=b;
}
if(c>max){
    max=c;
}

return max;
}

console.log(maksimum(10,7,9));