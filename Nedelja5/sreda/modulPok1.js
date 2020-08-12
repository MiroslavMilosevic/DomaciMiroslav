let charizard={ime:"charizard", vrsta:"varteni", slika:"slike/Leon_Charizard.png", sposobnosti:["blaze","fire","superBlaze"], 
karakterisitke:{napad:250, odbrana:100, brzina: 95}
                                           }
let charmander={ime:"charmander", vrsta:"varteni", slika:"slike/charmeleon.png", sposobnosti:["blaze","fire"], 
karakterisitke:{napad:125, odbrana:55, brzina: 125}
                                           }
let bulbasaur={ime:"bulbasaur", vrsta:"travnati", slika:"slike/Bulbasaur.png", sposobnosti:["overgrow","grassAttac"], 
karakterisitke:{napad:150, odbrana:70, brzina: 200}
                                           }
let alakazam={ime:"alakazam", vrsta:"psiholoski", slika:"slike/Alakazam.png", sposobnosti:["Inner Focus", "Synchronize"], 
karakterisitke:{napad:200, odbrana:200, brzina: 95}
                                      }
let pocetniNiz= [charizard, charmander,bulbasaur, alakazam]; 

function vratiNajjaceg(nizPokemona){

    nizPokemona.sort((a,b)=> b.karakterisitke.napad-a.karakterisitke.napad)
    return nizPokemona[0]
}


export {pocetniNiz, vratiNajjaceg}