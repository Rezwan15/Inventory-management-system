import React from 'react'
import './App.css'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className="appContainer"> 
      <section>
        <Product />
      </section>
    </Container>
  )
}

export default App;