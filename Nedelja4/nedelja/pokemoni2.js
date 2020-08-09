let charmander={ime:"charmander", vrsta:"varteni", slika:"slike/charmeleon.png", sposobnosti:["blaze","fire"], 
karakterisitke:{napad:125, odbrana:55, brzina: 125}
                                           }
let charizard={ime:"charizard", vrsta:"varteni", slika:"slike/Leon_Charizard.png", sposobnosti:["blaze","fire","superBlaze"], 
karakterisitke:{napad:250, odbrana:100, brzina: 95}
                                           }
let bulbasaur={ime:"bulbasaur", vrsta:"travnati", slika:"slike/Bulbasaur.png", sposobnosti:["overgrow","grassAttac"], 
karakterisitke:{napad:150, odbrana:70, brzina: 200}
                                           }
let alakazam={ime:"alakazam", vrsta:"psiholoski", slika:"slike/Alakazam.png", sposobnosti:["Inner Focus", "Synchronize"], 
karakterisitke:{napad:200, odbrana:200, brzina: 95}
                                      }
let pocetniNiz= [charmander, charizard, bulbasaur, alakazam];  
function vratiNajjaceg(nizPokemona){

    nizPokemona.sort((a,b)=> b.karakterisitke.napad-a.karakterisitke.napad)
    return nizPokemona[0]
}
let niz=[charmander, charizard, bulbasaur, alakazam];
//console.log(vratiNajjaceg(niz));
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

var najjaci=document.getElementById("pobednik");
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

