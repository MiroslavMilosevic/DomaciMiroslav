import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getAllPast, getCompanyInfo } from './services/services'
import { Launch, Select } from './services/components'


const App=()=>{
const [companyName, setCompanyName] = useState('');
const [niz, setNiz] = useState([]);
const [year, setYear] = useState('');
useEffect(()=>{
  getCompanyInfo().then(res=>{
    setCompanyName(res.data.name)
  })
},[])//use state za informacije
useEffect(()=>{

getAllPast().then(res=>{
   console.log(res.data);
   setNiz(res.data)
    
})
},[companyName])//use efect za niz Lansiranja
  return(
    <>
    <div>
    <h1>{companyName}</h1>
    <Select key='MojSelekt' setNizCmp={setYear}/>
    {niz.filter(el=>{return el.launch_year.includes(year)}).map(el=> <Launch key={el.launch_date_utc} name={el.mission_name} year={el.launch_year}/>)}
    
    </div>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

