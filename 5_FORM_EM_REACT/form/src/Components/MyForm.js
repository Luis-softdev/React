import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {
    // 6 - Controlled inputs
    //3 - Gerenciamento de Dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState(user ? user.bio : "");

    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    }

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o Formulário");
        console.log(name, email, bio, role);

        //7- Limpar formulário
        setName("");
        setEmail("");
        setBio("");
    }
  return (
    <div>
        {/* 5 - Envio de form */}
        {/* 1 - Criação de Form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name} />
            </div>
        {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail:</span>
        {/* 4 - Simplificação de Manipulação de State */}
                <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* 8 - Textearea */}
            <label>
                <span>Bio:</span>
                <textarea 
                name="bio" 
                placeholder='Descrição do usuário' 
                onChange={(e) => setBio(e.target.value)} 
                value={bio}>
                </textarea>
            </label>
            {/* 9 - Select */}
            <label>
                <span>Função no Sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
            </form>
    </div>
  )
}

export default MyForm