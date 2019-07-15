import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [ name, setName ] = useState('')

  const handleClick = () => {
    alert(`Bom dia ${name}`)
  }

  const handleNameChange = event => {
    setName(event.target.value)
  }

  return (
    <div>
      <h1>olá</h1>

      <Card name='aaaa' />

      <p><input placeholder='Nome:' onChange={handleNameChange} /></p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default App
