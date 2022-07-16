import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Comidas from '../components/Comidas';
import Home from '../components/Home';
import Menus from '../components/Menus';
import Principales from '../components/Principales';
import Sopas from '../components/Sopas';
import Tortas from '../components/Tortas';
import Error from '../components/Error';
import Vegetarianos from '../components/Vegetarianos';

function Router(props) {
    return (
        <>
        
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/comidas' element={<Comidas />} />
                    <Route path='/menus' element={<Menus />} />
                    <Route path='/principales' element={<Principales />} />
                    <Route path='/sopas' element={<Sopas />} />
                    <Route path='/tortas' element={<Tortas />} />
                    <Route path='/vegetarianos' element={<Vegetarianos />} />
                    <Route path='/*' element={<Error/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Router;