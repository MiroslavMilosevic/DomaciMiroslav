function daLiImaDovoljnoPrihoda(Select,nizPrihoda,nizRashoda,Iznos){

    let bl=true;
    if(Select=='min'){
        bl=false;
        let sum=0;
        let sumNeg=0;
        for(let i=0;i<nizPrihoda.length;i++){
            sum+=nizPrihoda[i].Iznos;
        }
        for(let j=0;j<nizRashoda.length;j++){
            sumNeg+=nizRashoda[j].Iznos;
        }
       sumNeg=-sumNeg;
        if((sum-sumNeg-Iznos)>0){
            bl=true;
        }else{
            console.log('Rashod veci od prihoda');
        }

    }
    return bl;
}//////////////////
function proveraPodataka(Opis,Iznos){
    if((Opis.trim().length>0)&&(Opis.trim().length<25)&&
    (Iznos.trim().length>0)&&(Iznos.trim().length<=10)&&
    (Iznos.indexOf(' ') < 0)&&(Number(Iznos)>0)&&(Number(Iznos)!=NaN)){
        return true;
    }else{
        return false;
    }
    }
    //////////////////
    function dodajPrihodiliRashod(Select, Opis, Iznos, nizPrihoda, nizRashoda){  ///////////////funkcija DodajPrihodiliRashod Pocetak
        if(Select.value=='plu'){
            let prihod={
                Opis:Opis.value,
                Iznos:Number(Iznos.value),
                Vrednost:'+'
            }
            nizPrihoda.push(prihod) 
        }else{
            let rashod={
                Opis:Opis.value,
                Iznos:Number(-Iznos.value),
                Vrednost:'-'
            }
            nizRashoda.push(rashod)
        }        
        repaint(nizPrihoda, nizRashoda)
        Opis.value=''
        Iznos.value='0'
        
        }



        function repaint(nizPrihoda,nizRashoda){
            let ukupniPrihodi=0;
            let ukupniRashodi=0;
            let stanje=0;
           
            for(let i=0;i<nizPrihoda.length;i++){
                ukupniPrihodi+=nizPrihoda[i].Iznos;
            }
            for(let j=0;j<nizRashoda.length;j++){
                ukupniRashodi+=nizRashoda[j].Iznos;
            }
            stanje=ukupniPrihodi+ukupniRashodi;
            let znak=''
            if(stanje>0){znak='+'}else {znak=''}
            stanje=stanje.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            let prikazStanja=document.getElementById('h1Ukupno')
            prikazStanja.innerText=znak+stanje;
            let procenat=Math.floor((-ukupniRashodi/ukupniPrihodi)*100)
            if(procenat==Infinity||isNaN(procenat)){
                procenat=0;
            }
            let ukupniPrihodi2=ukupniPrihodi;
            if(ukupniPrihodi>0){
                ukupniPrihodi='+'+ukupniPrihodi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
            }else{
            ukupniPrihodi=ukupniPrihodi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");     }
            ukupniRashodi=ukupniRashodi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // let span1Rashodi=document.createElement('span') 
            // span1Rashodi.innerText='Ukupni Rashodi';
            let span2Rashodi=document.createElement('span');
            span2Rashodi.innerText=procenat+'%'; 
            span2Rashodi.className='sp2r';  
            let hederPrihodi=document.getElementById('h2Prihodi')
            let hederRashodi=document.getElementById('h2Rashodi')
            hederPrihodi.innerHTML='Ukupan prihod &nbsp;&nbsp;&nbsp;'+ukupniPrihodi;
            hederRashodi.innerHTML='Ukupan rashod &nbsp;&nbsp;&nbsp;'+ukupniRashodi+' ';
            hederRashodi.appendChild(span2Rashodi);
             //////Sada donji deo repaintujemo
             let tebela1=document.getElementById('tabela1')
             tebela1.innerHTML='';
             let captionPrihodi=document.createElement('caption');
             let h1=document.createElement('h1')
             h1.innerText='Prihodi:'
             captionPrihodi.appendChild(h1);
             tebela1.appendChild(captionPrihodi)
             for(let i=0;i<nizPrihoda.length;i++){
                 let tr=document.createElement('tr')
                 tr.className='tr1';
                 let td1=document.createElement('td')
                 td1.className='td1'
                 td1.innerText=nizPrihoda[i].Opis;
                 let td2=document.createElement('td')
                 td2.className='td2'
                 td2.innerText=nizPrihoda[i].Iznos;
                 let td3=document.createElement('td');
                 td3.className='td3';
                 let button=document.createElement('button');
                 button.innerText='Obrisi';
                 button.className='dugmeNone';
                 button.addEventListener('click',function(){
                 nizPrihoda.splice(i,1);
                 repaint(nizPrihoda,nizRashoda)    
                 })
                 tr.addEventListener('mouseover',function(){
                    button.className='dugmeDa';
                  //  console.log('klasaaaaaaaaaaaaa');
                });
                tr.addEventListener('mouseleave',function(){
                    button.className='dugmeNone';
                  //  console.log('klasa2132143534');
                })
                 td3.appendChild(button);
                 tr.appendChild(td1)
                 tr.appendChild(td2);
                 tr.appendChild(td3)
                 tebela1.appendChild(tr);
             }
             let tebela2=document.getElementById('tabela2')
             tebela2.innerHTML='';
             let captionRashodi=document.createElement('caption');
             let h12=document.createElement('h1')
             h12.innerText='Rashodi:'
             captionRashodi.appendChild(h12);
             tebela2.appendChild(captionRashodi)
             
        
             for(let i=0;i<nizRashoda.length;i++){
                let procenatZaTabele=Math.floor((-nizRashoda[i].Iznos/ukupniPrihodi2)*100);
                
                if(procenatZaTabele==Infinity||isNaN(procenatZaTabele)){
                    procenatZaTabele=0;
                }
                let tr=document.createElement('tr')
                tr.className='tr1';
                let td1=document.createElement('td')
                td1.className='td1'
                td1.innerText=nizRashoda[i].Opis;
                let td2=document.createElement('td')
                td2.className='td2'
                td2.innerText=nizRashoda[i].Iznos;
                let td4=document.createElement('td');/////////////////////////hlskaafkjhahfshlgsdfhgkjlhslgsdfjdfs
                td4.className='td4';
                td4.innerText=procenatZaTabele+'%';
                let td3=document.createElement('td');
                td3.className='td3';
                let button=document.createElement('button');
                button.innerText='Obrisi';
                button.className='dugmeNone';
                button.addEventListener('click',function(){
                nizRashoda.splice(i,1);
                repaint(nizPrihoda,nizRashoda)    
                })
                tr.addEventListener('mouseover',function(){
                    button.className='dugmeDa';
                  //  console.log('klasaaaaaaaaaaaaa');
                });
                tr.addEventListener('mouseleave',function(){
                    button.className='dugmeNone';
                  //  console.log('klasa2132143534');
                })
                td3.appendChild(button);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td4);
                tr.appendChild(td3);
                tebela2.appendChild(tr);
            }
            document.getElementById('Greska').innerText='Unesite prihod ili rashod'
            document.getElementById('Greska').setAttribute('style','background-color: rgb(203, 244, 244);') 
        }

///////////////////                             EXPORT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export {daLiImaDovoljnoPrihoda, proveraPodataka, dodajPrihodiliRashod, repaint}