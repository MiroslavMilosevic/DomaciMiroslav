import React from 'react';
import ReactDOM from 'react-dom';

const Forma=({string1})=>{
  return(
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input type='text' placeholder='text'></input>
      <button>{string1}</button>
    </form>
  )
}

const Card=({URL, desc})=>{
  return(
    <div>
     <Emojy URL={URL}></Emojy>
     <Description desc={desc}></Description>
    </div>
  )
}
const Emojy=({URL})=>{
  return(
      <img src={URL}></img>
  )
}
const Description=({desc})=>{
  return(
             <p>{desc}</p>
  )
}



const App=({string, URL, desc})=>{
  return(
    <div>
    <Forma string1={string}></Forma>
    <Card URL={URL} desc={desc}></Card>
    </div> 
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App string='rec rec rec' URL='https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-260nw-677579860.jpg' desc='happy emojy'/>
  </React.StrictMode>,
  document.getElementById('root')
);


