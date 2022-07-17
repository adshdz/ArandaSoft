import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Comidas from '../components/Comidas';
import Home from '../components/Home';
import Menus from '../components/Menus';
import Principales from '../components/Principales';
import Sopas from '../components/Sopas';
import Tortas from '../components/Tortas';
import Error from '../components/Error';
import Vegetarianos from '../components/Vegetarianos';
import { ApiContext } from '../context/ApiContext';

function Router(props) {

    const [categoria, setcategoria] = useState("");
    const api = "https://api.spoonacular.com/recipes/complexSearch?apiKey=5e21a155448b4fa193f1bdd32a1bdca7&query=" + categoria + "&maxFat=25&number=2"


    return (
        <>
            <BrowserRouter>
                <ApiContext.Provider value={{ setcategoria, api }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/comidas' element={<Comidas />} />
                        <Route path='/menus' element={<Menus />} />
                        <Route path='/principales' element={<Principales />} />
                        <Route path='/sopas' element={<Sopas />} />
                        <Route path='/tortas' element={<Tortas />} />
                        <Route path='/vegetarianos' element={<Vegetarianos />} />
                        <Route path='/*' element={<Error />} />
                    </Routes>
                </ApiContext.Provider>
            </BrowserRouter>
        </>
    );
}
export default Router;