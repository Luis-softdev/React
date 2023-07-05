import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';
import { useState } from "react";
import Title from './Components/Title';

function App() {
  const n = 15
  const [name] = useState("Luis")
  const redTitle = false

  return (
    <div className="App">
      {/* CSS Global */}
     <h1>Reatc com CSS</h1>
     {/* CSS de Componente */}
     <MyComponent />
     <p>Este parágrafo é do App.js</p>
     {/* Inline CSS */}
     <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}
     >Este elemento foi estilizado de forma inline</p>
     {/* CSS Inline dinâmico */}
     <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
      CSS dinâmico
     </h2>
     <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
      CSS dinâmico
     </h2>
     <h2 style={name === "Luis" ? ({color: "green", backgroundColor: "#000"}) : ({color: null})}>
      Teste Nome
     </h2>
     {/* Classe dinâmica */}
     <h2 className={redTitle ? "red-title" : "title"}>
      Este título vai ter classe dinâmica</h2>
     {/* CSS Modules */}
     <Title />
     <h2 className="my_title">Testando</h2>
    </div>
    
  );
}

export default App;
