import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Fernando")
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {/* {!x && <p>Agora X é falso</p>} */}
        <h1>If Ternário</h1>
        {name === "Luis" ? (
          <div>
            <p>O nome é Luis</p>
          </div>
        ) : (
          <div>
            <p>Nome não econtrado</p>
          </div>
        )}
        <button onClick={() => setName("Luis")}>Clique aqui</button>
    </div>
  );
};

export default ConditionalRender;