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

const cardData = {
  name: 'Hécate',
  level: 10,
  roll: 'mago',
  online: true,
  starts: 3,
  photo: maga,
  power: 'Telequinesis',
  strong: 10,
  live: 100,
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
  return (
    <>
      <div className="container">
        <img className='foto' src={props.cardData.photo}></img>
        <h1 className='personajeName'>{props.cardData.name}</h1>
        <p className='estado'>{props.cardData.roll} . {props.cardData.online ? 'Activo' : 'Inactivo'}</p>
        <h2 className='estrellas'>STARS: {props.cardData.starts}</h2>
        <h3> 💪🏻Fuerza {props.cardData.strong}</h3>
        <h3>❤️Vida {props.cardData.live}</h3>
        <h2>Habilidades {props.cardData.power}</h2>
        <button className='botonDeAtaque' onClick={() => {
          alert('Atacando')
        }}> ⚔️ Atacar</button>
      </div>
    </>
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
      <Card cardData={cardData} />
    </>
  )
}

export default App
