
let niz=[3,5,7,11];
let nizReci=["fizz","buzz","zazz","gazz"];
let rec="";

for(let i=1;i<=1000;i++){
rec="";
let br=0;
   for(let j=0;j<niz.length;j++){
        if(i%niz[j]==0){
             rec+=nizReci[j];
             br++;
        }       
 
   }
   if(br==0){
    rec=i;
   }
console.log(rec);
}
