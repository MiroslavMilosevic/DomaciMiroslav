function deljiviSa5(niz){

    for(let i=0;i<niz.length;i++){
        if(niz[i]%5===0){
            console.log(niz[i]);
        }
    }
}

let niz=[1,5,2,6,5,7,15,25,32]
deljiviSa5(niz);