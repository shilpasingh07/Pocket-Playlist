import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './components/navbar';
import Cards from './components/cards';
import Foot from './components/footer';
import assets from './source';

const ncard =(val)=>{
  return(
    <Cards
    key={val.id}
    name={val.name}
    poster={val.poster}
    audio={val.audio}
    />
  );
}

function App() {
  return (
    <>
    <Nav />
    {assets.map(ncard)}
    <Foot />
    </>
  );
}

export default App;