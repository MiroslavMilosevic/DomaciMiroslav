function cenaPice(r,cena){

let povrsinaPice=(r*r)*Math.PI;
let cenaZaCm=cena/povrsinaPice;

console.log(cenaZaCm);
return cenaZaCm;


}
cenaPice(21,1000);