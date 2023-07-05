import './App.css';
import Car from './Components/Car';

function App() {

  const myCars = [
    { name: "Fusca", km: 10000, color: "Branca" },
    { name: "Polo", km: 1000, color: "Verde" },
    { name: "Gol", km: 500, color: "Prata" },
  ]

  return (
    <div className="App">
      <h2>ShowRoom de Carros</h2>
      <div className="car-container">
       {myCars.map((car)=> (
         <Car car={car}/>
       ))}
      </div>
      
      
    </div>
  );
}

export default App;
