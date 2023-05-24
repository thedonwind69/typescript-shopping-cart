import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {Home} from './pages/Home';
import {Store} from './pages/Store';
import {About} from './pages/About';
import {NavBar} from './components/NavBar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {

  return (
    <>

    <ShoppingCartProvider>
      <NavBar/>
      <Container>
        <Routes>

          
          <Route path='/' element={<Home/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/about' element={<About/>}></Route>

        </Routes>
      </Container>
    </ShoppingCartProvider>
      
    </>

  )
}

export default App
