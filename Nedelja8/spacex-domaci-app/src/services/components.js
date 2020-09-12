import React, {} from 'react';
export const Launch=({name, year})=>{

    return(

        <>
        <p>Name: {name}</p>
        <p >Year:{year}</p>
        <br/>
        </>
    )
}

export const Select=({setNizCmp})=>{
const launch_years=['', '2000', '2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
    return(
        <>
        <select onChange={(e)=>{setNizCmp(e.target.value)}}>
    {launch_years.map(el=> <option key={el} value={el}>{el}</option>)}
        </select>
        </>
    )
}
