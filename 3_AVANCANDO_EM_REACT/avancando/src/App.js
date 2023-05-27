import {useState } from 'react';
import './App.css';
import Brain from "./assets/brain.jpg";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDatails from './components/CarDatails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  //const name = "Fernando"
  const [userName] = useState("Luis Fernando")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelha", Km: 0, newCar: true},
    {id: 2, brand: "VW", color: "Prata", Km: 4500, newCar: false},
    {id: 3, brand: "Hianday", color: "Branco", Km: 0, newCar: true}
  ]

  function showMessage(){
    console.log("Evento do componente Pai!");
  }
  const [message, setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg);
  }

  const users = [
    {id: 1, name: "Luis Fernando", job: "Programador", age: 20},
    {id: 1, name: "Pedro", job: "Programador", age: 21},
    {id: 1, name: "Gabriel", job: "Estudante", age: 16},
    {id: 1, name: "Felipe", job: "Estudante", age: 16}

  ]

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
      <CarDatails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitando*/}
      <CarDatails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDatails brand="Fiat" km={5400} color="Preto" newCar={false}/>
      {/* loop em array de objetos*/}
      {cars.map((car) => (
        <CarDatails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}/>))}
      {/*fragment*/}
      <Fragment propFragment="teste" />
      {/*children*/}
      <Container myValue="testing">
        <p>E esse é o conteúdo</p>
      </Container>
      {/*executar a função*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*state lift*/}
      <Message  msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>4
      {/*desafio*/}
      {users.map((user)=> 
      <UserDetails 
      key={user.id}
      name={user.name}
      job={user.job}
      age={user.age}
      />
      )}
      


      
    </div>
  );
}

export default App;
