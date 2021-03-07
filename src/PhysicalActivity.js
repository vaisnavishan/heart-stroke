import e from './exercises.jpg';
import yoga from './yoga.png';
import './HealthyEating.css';

function PhysicalA() {

 
  return (
    <div className="App">
    <header className="main-header"> 
     
      <br></br>
      <body>
      <p>
      <h1> Physical Activity </h1>  

      <div id="PYSAC">
      <p>Regular activity can help you lose weight, stay healthy, slow down aging, sleep better,
       reduce stress and more  </p>
       
       <p>Heart and stroke recommends should accumulate at least 150 minutes of moderate- to vigorous- intensity aerobic physical activity per week
Ensure your activities touches: Endurance (walking cycling and tennis), Strength (carrying groceries), Flexibility (stretches, yoga, housework), Balance(Yoga and Chi)
</p>
</div>

</p>

<img src={e} alt='excercise' />
</body>
<li>Involve family</li>
<li>Work up gradually</li>
<li>Take 10 min of work break to go on a walk</li>
<li>Keep at it</li>
<li>Stay motivated</li>
<img src={yoga} alt='yoga'/>


    
    <br></br>
    </header>    
  </div>
);
}

export default PhysicalA;