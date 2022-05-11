import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './UI/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import MenuTop from './components/MenuTop';

const App = () => {
  return (
    <div className='App'>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} >

            <Route path='/contact/menu' element={<Menu />} /> 
            <Route path='/contact/menutop' element={<MenuTop />} /> 

          </Route>

        </Routes>

      </BrowserRouter>

    </div >
  );
};

export default App;