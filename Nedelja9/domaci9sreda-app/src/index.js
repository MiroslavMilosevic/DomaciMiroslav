import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {getData} from './axios'
import { v1 as uuid } from 'uuid'
const Ime=({clan, niz, setNiz})=>{
 
  return(
    <>
    {<p key={uuid()}>{clan.first_name}{clan.last_name}</p>}
    <button onClick={()=>{
       let index=niz.findIndex(el=>el.id==clan.id)
       let tmp=[...niz]
       tmp.splice(index, 1);
       setNiz(tmp)

      }}>Obrisi</button>
    </>
  )
}
const Home=({niz})=>{
  console.log(niz);
  return(
    <>
    {niz.map(el=>{return <p key={uuid()}>{el.first_name}{el.last_name}</p>})}
    </>
  )
}
const Filter=({niz, setNiz, kljuc})=>{
  const [pretraga, setPretraga]= useState('')
  console.log(niz.filter(el=>el.first_name.includes('a')));
  return(
    <>
    <input type='text' placeholder='pretraga'onChange={(e)=>setPretraga(e.target.value)} />
    {niz.filter(el=> el.first_name.toLocaleLowerCase().includes(pretraga.toLocaleLowerCase()))
    .map(el=>{return <Ime key={uuid()} clan={el} niz={niz} setNiz={setNiz}/>})}
 
    </>
  )
}

const App=()=>{
   const [niz, setNiz]= useState([])
useEffect(()=>{
  getData().then(res=>{
    console.log(res.data.data);
    setNiz(res.data.data)
  }
)

},[])
  return(
    <Router>
    <nav>
      <Link to="/home">Home</Link> | 
      <Link to="/filter">Contact</Link>
    </nav>
    <Switch>
      <Route exact path="/home">
        <Home key={uuid()} niz={niz} />
      </Route>
      <Route exact path="/filter">
        <Filter niz={niz} setNiz={setNiz} /> 
      </Route>
    </Switch>
  </Router>
  
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

