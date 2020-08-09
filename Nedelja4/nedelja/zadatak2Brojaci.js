

let brojac=0;
let naruci1=document.querySelector("#naruci1")
let naruci2=document.querySelector("#naruci2")
let brojacP=document.querySelector("#brojacP");
let ispisParagraf = document.getElementById("ispis");
brojacP.innerText=brojac;
naruci1.addEventListener('click',function(){   
    brojac++;
    brojacP.innerText=brojac;
    ispisParagraf.innerText=''
})
naruci2.addEventListener('click', function(){
    brojac++;
    brojacP.innerText=brojac;
    ispisParagraf.innerText=''
})
let naruciOdmah1=document.getElementById("naruciOdmah1")
let naruciOdmah2=document.getElementById("naruciOdmah2")

let date=new Date();
naruciOdmah1.addEventListener('click', function(){
    if(brojac!=0){
    ispisParagraf.innerText="narucili ste "+brojac+" pica [ datum:"+date.getUTCMonth()+"."+date.getUTCDate()+" vreme:"+date.getHours()+":"+date.getMinutes()+"]";
   brojac=0;
   brojacP.innerText=brojac   
}else{
       ispisParagraf.innerText='nije moguce naruciti 0 pica'
}
})

naruciOdmah2.addEventListener('click', function(){
   if(brojac!=0){
    ispisParagraf.innerText="narucili ste "+brojac+" pica [ datum:"+date.getUTCMonth()+"."+date.getUTCDate()+" vreme:"+date.getHours()+":"+date.getMinutes()+"]";
   brojac=0;
   brojacP.innerText=brojac
   }else{
    ispisParagraf.innerText='nije moguce naruciti 0 pica'
   }
})
