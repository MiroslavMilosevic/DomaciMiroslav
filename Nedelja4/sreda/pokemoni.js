


let charmander={ime:"charmander", vrsta:"varteni", sposobnosti:["blaze","fire"], 
karakterisitke:{napad:125, odbrana:55, brzina: 125}
                                           }
let charizard={ime:"charizard", vrsta:"varteni", sposobnosti:["blaze","fire","superBlaze"], 
karakterisitke:{napad:250, odbrana:100, brzina: 95}
                                           }
let bulbasaur={ime:"bulbasaur", vrsta:"travnati", sposobnosti:["overgrow","grassAttac"], 
karakterisitke:{napad:150, odbrana:70, brzina: 200}
                                           }
let alakazam={ime:"alakazam", vrsta:"psiholoski", sposobnosti:["Inner Focus","Synchronize"], 
karakterisitke:{napad:200, odbrana:200, brzina: 95}
                                           }

function vratiNizSposobnosti(nizPokemona){
let niz=[]

for(let i=0;i<nizPokemona.length;i++){
      let pok=nizPokemona[i];
    for(let j=0;j<pok.sposobnosti.length;j++){
        niz.push(pok.sposobnosti[j])
    }
}
    return niz;
}
 let niz=[charmander,charizard,bulbasaur,alakazam]                                          
console.log(vratiNizSposobnosti(niz))


niz.sort((a,b) => a.karakterisitke.brzina-b.karakterisitke.brzina)
console.log(niz);