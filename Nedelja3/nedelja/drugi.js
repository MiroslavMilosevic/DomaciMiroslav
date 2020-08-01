function lifeSupply(godine, brojMesecno){
    if(godine<0||brojMesecno<0){
        return -1
    }

    return (100-godine)*brojMesecno*12
}
console.log(lifeSupply(26,-110));