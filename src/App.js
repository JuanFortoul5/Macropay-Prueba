import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Product from './Routes/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:productName' element={<Product/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
