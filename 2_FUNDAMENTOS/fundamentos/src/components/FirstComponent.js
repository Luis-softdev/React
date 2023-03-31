import MyComponent from "./MyComponent";

const FirstComponent = () => {

    return(
        <div>
            {/*Em React, o comentáirio não vaza para o usuário*/}
            <h1>Meu Primeiro Componente</h1>
            <p className = "teste">Meu Texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;