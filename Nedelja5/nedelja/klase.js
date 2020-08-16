class Covek{
   constructor(ime, prezime, godinaRodjenja){
       this.ime=ime;
       this.prezime=prezime;
       this.godinaRodjenja=godinaRodjenja;    
   }
}
class Student extends Covek{  //////////studenti
     constructor(ime, prezime, godinaRodjenja,godinaStudija,prosek){
             super(ime, prezime, godinaRodjenja);
             this.godinaStudija=godinaStudija;
             this.prosek=prosek;
     }}
class StudentOsnovnihStudija extends Student{
    constructor(ime, prezime, godinaRodjenja,godinaStudija,prosek,smerOsnovnih){
          super(ime, prezime, godinaRodjenja,godinaStudija,prosek);
          this.smerOsnovnih=smerOsnovnih;
    }
}
class StudentMasterStudija extends Student{
    constructor(ime, prezime, godinaRodjenja,godinaStudija,prosek,smerMaster){
        super(ime, prezime, godinaRodjenja,godinaStudija,prosek);
        this.smerMaster=smerMaster;
    }
}///////////////////////studenti
class Zaposleni extends Covek{
constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata){
    super(ime, prezime, godinaRodjenja)
    this.godinaZaposlenja=godinaZaposlenja;
    this.plata=plata;
}}
class Nastavnik extends Zaposleni{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata);
        this.omiljeniPredmet=omiljeniPredmet;
        this.listaPredmeta=listaPredmeta;

    }}
class Profesor extends Nastavnik{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, titula){
              super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
              this.titula=titula;
    }
}
class Asistent extends Nastavnik{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, smerDoktorskih){
              super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
              this.smerDoktorskih=smerDoktorskih;
    }
}
class Sluzbenik extends Zaposleni{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, odsek){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata)
        this.odsek=odsek;
    }
}
let sms1=new StudentMasterStudija('Pero','Peric',1996,3,10.00,'somelier');
console.log(sms1);
let prof1=new Profesor('mica','mica',1959,1997,1500,'biologija',['biologija','mikrobiologija','konzervisanje hrane'],'redovni')
console.log(prof1);
