import './App.css';
import HealthyEating from './HealthyEating.js'; 
import PhysicalActivity from './PhysicalActivity.js'; 
import StressManagement from './StressManagement.js'; 
import Home from './Home.js'; 
import React from 'react';
import {Link, Route} from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



function App() {

    const config ={
      width: "400px",
      height: "500px",
      floating: true,
    };

    const theme = {
      background: '#f5f8fb',
      headerBgColor: '#ee5a40d7',
      headerFontColor: '#fff',
      headerFontSize: '25px',
      botBubbleColor:  '#ee5a40d7',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };
  
  
  return (
    <div className="App">
      <header className="main-header">
      <h1> Heart & Stroke </h1> 

    <nav class="nav main-nav">

          <ul>
              <li><Link to="/home">Home</Link></li>  
              <li><Link to="/healthyEating">Healthy Eating</Link></li>          
              <li><Link to="/physicalActivity">Physical Activity</Link></li>   
              <li><Link to="/stressManagement">Stress Management</Link></li>   
              
          </ul>          

      </nav>

      <body>
      <Route exact path="/healthyEating" component={HealthyEating} />
      <Route exact path="/physicalActivity" component={PhysicalActivity} />
      <Route exact path="/stressManagement" component={StressManagement} />
      <Route exact path="/home" component={Home} /> 

 <ThemeProvider theme={theme}>
    <ChatBot 
       steps={[
         {
          id:'intro', 
          message:'Hello! I am HeartBot. How can I help you? Do you believe you may be experiencing hypertension?', 
          trigger:'intro-user',
         },
         {
         id:'intro-user', 
              options:[
              {value:'y', label:'Yes', trigger:'yes-response'},
              {value:'n', label:'No', trigger:'no-answer'},
              ] 
            },
            {
              id:'yes-response', 
              message:'Are you suffering from fatigue and/or Severe Headaches? *This diagnosis is only an estimate and should not be considered a replacement for a doctor*', 
              trigger:'fatigue',
            },
            {
              id:'fatigue',
              options:[
              {value:'y', label:'Yes', trigger:'ifNoseBleed'},
              {value:'n', label:'No', trigger:'ifNoseNo'},
              ]             

            },

            {
              id:'ifNoseBleed', 
              message:'Are you suffering from a nosebleed or/and chest pain?', 
              trigger:'NB',
            },
            {
              id:'NB',
              options:[
              {value:'y', label:'Yes', trigger:'IH'},
              {value:'n', label:'No', trigger:'IHNO'},
              ]             

            },

            {
              id:'IH', 
              message:'Are you suffering from a irregular Heartbeat or/and Pounding in chest, neck, or ears?', 
              trigger:'final',
            },
            {
              id:'final',
              options:[
              {value:'y', label:'Yes', trigger:'finalT'},
              {value:'n', label:'No', trigger:'finalok'},
              ]             

            },

            {
              id:'finalT', 
              message:'You are at high risk of hypertension! Please visit a doctor', 
              end: true,
            },
            {
              id:'finalT2',
              message:'You have a low risk of hypertension. Look at our page for ways to reduce it! If things worsen, please visit a doctor', 
              end: true,
                       

            },

            {
              id:'no-response', 
              message:'Are you suffering from fatigue and/or Severe Headaches? *This diagnosis is only an estimate and should not be considered a replacement for a doctor*', 
              trigger:'fatigueN',
            },

            {
              id:'fatigueN',
              options:[
              {value:'y', label:'Yes', trigger:'ifNoseBleed'},
              {value:'n', label:'No', trigger:'ifNoseNo'},
              ]             

            },

            {
              id:'ifNoseNo', 
              message:'Are you suffering from a nosebleed or/and chest pain?', 
              trigger:'NBNO',
            },
            {
              id:'NBNO',
              options:[
              {value:'y', label:'Yes', trigger:'IH'},
              {value:'n', label:'No', trigger:'IHNO'},
              ]             

            },

            {
              id:'IHNO', 
              message:'Are you suffering from a irregular Heartbeat or/and Pounding in chest, neck, or ears?', 
              trigger:'final3',
            },
            {
              id:'final3',
              options:[
              {value:'y', label:'Yes', trigger:'finalT'},
              {value:'n', label:'No', trigger:'finalNO'},
              ]             

            },

            {
              id:'finalT', 
              message:'You are at high risk of hypertension! Please visit a doctor', 
              end: true,
            },
            {
              id:'finalNO',
              message:'You have a low to moderate risk of hypertension. Look at our page for ways to reduce it! If things worsen, please visit a doctor', 
              end: true,
                       

            },

            {
              id:'finalok',
              message:'You are at risk of hypertension. If things worsen, please visit a doctor', 
              end: true,
                       

            },

            {
              id:'no-answer',
              message:'Explore our page to receive tips on how to reduce your risk of hypertension!', 
              end: true,
                       

            },




         ]}
         {...config}
      />
   </ThemeProvider>

</body>
      </header>    
    </div>
  );
}

export default App;
