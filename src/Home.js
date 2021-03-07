import heart from './heart.gif';
import './App.css';
import React from 'react';



function Home() {
  
  return (
    <div className="App">
      <header className="main-header">
      <body>

        <img src={heart}  alt="logo" />
        <p>
        <h1> How to Manage your Blood Pressure </h1>
        
        </p>
        <h1>How you can help!</h1>
      
    <div className = "hcuh">
      <button class= "btn">Donate</button>
      <button class= "btn">Volunteer</button> 
      <button class= "btn">Sign up to be an advocate!</button>  
      </div>


<br></br>
</body>
      </header>    
    </div>
  );
}

export default Home;