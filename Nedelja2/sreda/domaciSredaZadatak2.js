let cenaProizvoda=1535;
let budzetKupca=1250;

if(cenaProizvoda>budzetKupca){
    console.log("nemate dovoljno novca da kupite zeljeni proizvod");
        console.log("stanje na racunu:",budzetKupca);
}else{
    budzetKupca-=cenaProizvoda;
    console.log("uspesno ste kupili zeljeni proizvod")
    console.log("preostalo novca:",budzetKupca);
}