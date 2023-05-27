const UserDetails = ({name, job, age}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profisão: {job}</p>
        {age >=18 ? (<p>Pode tirar a carteira de motorista!</p>) : (<p>Menor de idade</p>)}
    </div>
  )
}

export default UserDetails