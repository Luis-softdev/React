import './MyForm.css'
import {useState} from 'react'

const MyForm = () => {
    //3 - Gerenciamento de Dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    }

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o Formulário");
        console.log(name, email);
    }
  return (
    <div>
        {/* 5 - Envio de form */}
        {/* 1 - Criação de Form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} />
            </div>
        {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail:</span>
        {/* 4 - Simplificação de Manipulação de State */}
                <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input type="submit" value="Enviar" />
            </form>
    </div>
  )
}

export default MyForm