import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
//import MultiForm from './MultiInput/MultiForm'
import MultiForm from "./MultiInput/multiformcontainer"
//import MultiForm from "./MultiForm/MultiForm"



function App() {
  return (
    <div className="App">
      
      <Header/>
      <MultiForm/>
      {/* <MultiForm/> */}
    </div>
  );
}

export default App;
