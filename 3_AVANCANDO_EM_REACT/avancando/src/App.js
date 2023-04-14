import './App.css';
import Brain from "./assets/brain.jpg";
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h2>Avançando em React</h2>

      {/*Imagem em Public*/}
      <img src="coruja.jpg" alt="Descrever a imagem é uma boa prática"/>

      {/*Imagem em asset*/}
      <img src={Brain} alt="Cérebro"></img>

      <ManageData/>
    </div>
  );
}

export default App;
