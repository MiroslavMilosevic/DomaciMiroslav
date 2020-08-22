import{ daLiImaDovoljnoPrihoda, proveraPodataka, dodajPrihodiliRashod, repaint } from './moduli.js'

let nizPrihoda=[]
let nizRashoda=[]

let dugme=document.getElementById('dugme');
dugme.addEventListener('click', function(){
let Select=document.getElementById('Select') 
let Opis=document.getElementById('Opis')
let Iznos=document.getElementById('Iznos');
if(proveraPodataka(Opis.value, Iznos.value)&&(daLiImaDovoljnoPrihoda(Select.value,nizPrihoda,nizRashoda,Iznos.value))){

dodajPrihodiliRashod(Select,Opis,Iznos, nizPrihoda, nizRashoda);

}else {
    console.log('Greska pri unosu!');
    document.getElementById('Greska').innerText='Greska pri unosenju podataka!'
    document.getElementById('Greska').setAttribute('style','background-color:red')
}
})

 repaint(nizPrihoda,nizRashoda)