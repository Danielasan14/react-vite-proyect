import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import maga from './assets/maga.png'

const mock_perro = {
  nombre: 'Candy',
  edad: 15,
  color: 'blanco',
  raza: 'french poodle'
}

const CARD_DATA_MOCK = {
  name: 'Hécate',
  level: 10,
  roll: 'mago',
  online: true,
  starts: 3,
  photo: maga,
  strong: 10,
  life: 100,
}
const CARD_DATA_MOCK_ENEMIGO = {
  nameE: 'Berlin',
  rollE: 'mago',
  onlineE: false,
  startsE: 5,
  strongE: 12,
  lifeE: 98,
}
function PerroComponent(props) {
  return (
    <>
      <h3>Mi Objeto se llama {props.perro.nombre} </h3>
      <p>
        Su edad es {props.perro.edad}, de color {props.perro.color} y es de raza {props.perro.raza} estado {
          props.activo ? 'Disponible ' : 'Vendido '}
        su precio es de {props.precio}
      </p>
    </>
  )
}

function Card(props) {
  const {
    nameE,
    rollE,
    onlineE,
    startsE,
    strongE,
    lifeE
  }= props.enemigoCardData
  const {
    photo,
    name,
    roll,
    online,
    starts,
    strong,
    life,
    power
  } = props.cardData

  return (

    <div className="container">
      <img className='foto' src={photo}></img>
      <h1 className='personajeName'>{name}</h1>
      <p className='estado'>{roll} . {online ? 'Activo' : 'Inactivo'}</p>
      <h2 className='estrellas'>STARS: {starts}</h2>
      <h3> 💪🏻Fuerza {strong}</h3>
      <h3>❤️Vida {life}</h3>
      <h2>Habilidades {power}</h2>
      <button className='botonDeAtaque' onClick={() => {
        alert('Atacando')
      }}> ⚔️ Atacar</button>
      <p>ENEMIGO: Nombre: {nameE} su roll es {rollE} esta {onlineE} tiene {startsE} estrellas, su fuerza es de {strongE}% </p>
    </div>

  )
}




function App() {
  const [count, setCount] = useState(0)
  const [discount, setDiscount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Thelp</h1>
      <h3>Daniela Barrero Sánchez</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={() => setDiscount((discount) => discount - 1)}>
        count is {discount}
      </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PerroComponent perro={mock_perro} activo={true} precio={50} />
      <Card cardData={CARD_DATA_MOCK} enemigoCardData={CARD_DATA_MOCK_ENEMIGO} />
    </>
  )
}


const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple']
const [firstColor, secondColor, thirdColor, ...restOfColors] = colors
console.log(firstColor) // 'red'
console.log(secondColor) // 'blue'
console.log(thirdColor) // 'green'
console.log(restOfColors) // ['yellow', 'pink', 'purple']

export default App
