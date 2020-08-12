import{pocetniNiz, vratiNajjaceg } from './modulPok1.js'

let niz=pocetniNiz;
let prikazi=document.getElementById("prikaz");
prikazi.addEventListener('click', function(){
    var divGlavni = document.getElementById("cont")
    divGlavni.innerHTML='';
    for(let i=0;i<niz.length;i++){
 
        var div = document.createElement("div");
        var p = document.createElement("p");
        p.innerText=pocetniNiz[i].ime;
        var img=document.createElement("img");
        img.src=pocetniNiz[i].slika;
        img.setAttribute("style","width:200px")
        img.setAttribute("style","height:200px")
         div.appendChild(p)
         div.appendChild(img)
         divGlavni.appendChild(div)
    }
});
let najjaci=document.getElementById("pobednik");
najjaci.addEventListener('click', function(){
    let divGlavni=document.getElementById("cont")
    divGlavni.innerHTML=''
     let niz2=niz;
     let najjaciPokemon=vratiNajjaceg(niz2);  
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.innerText=najjaciPokemon.ime;   
    var img=document.createElement("img");
    img.src=najjaciPokemon.slika;
    img.setAttribute("style","width:200px")
    img.setAttribute("style","height:200px")
     div.appendChild(p)
     div.appendChild(img)
     divGlavni.appendChild(div)
})