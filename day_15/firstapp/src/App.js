import React from 'react'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
const App = () => {
  return (
    <div>
    <Nav/>
     <section>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     </section>
    </div>
  )
}

export default App


