const CarDatails = ({brand, km, color}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {clscolor}</li>
        </ul>
    </div>
  )
}

export default CarDatails