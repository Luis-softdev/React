import { useState } from 'react';
import './App.css';
import Brain from "./assets/brain.jpg";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDatails from './components/CarDatails';

function App() {

  const name = "Fernando"
  const [userName] = useState("Luis Fernando")

  return (
    <div className="App">
      <h2>Avançando em React</h2>

      {/*Imagem em Public*/}
      <img src="coruja.jpg" alt="Descrever a imagem é uma boa prática"/>

      {/*Imagem em asset*/}
      <img src={Brain} alt="Cérebro"></img>

      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDatails brand="VW" km={100000} color="Azul" />
    </div>
  );
}

export default App;
