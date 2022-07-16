import React, { useEffect } from 'react';
import createTarjets from "../helper/base"

function Header(props) {

    useEffect(()=>{
        createTarjets();
    },[])

    return (
        <>
            <div className="headform">
                <div className="header">
                    <div className="title">
                        <span className="text1">Recipe<span className="text2">App</span></span>
                    </div>

                    <div className="menuHead">
                    <ul>
                        <li><a href="/" className="selected">Home</a></li>
                        <li><a href='/comidas' className="selected">Comida R&aacute;pida</a></li>
                        <li><a href="/menus" className="selected">Men&uacute; Ni&ntilde;os</a></li>
                        <li><a href="/principales" className="selected">Platos Principales</a></li>
                        <li><a href="/sopas" className="selected">Sopas</a></li>
                        <li><a href="/tortas" className="selected">Tortas</a></li>
                        <li><a href="/vegetarianos" className="selected">Vegetarianos</a></li>
                    </ul>
                </div>
                  
                    <div className="icoHome"></div>
                </div>

                <div className="imgHead">
                    <div className="floatText">
                        <div className="text1">Recetas</div>
                        <div className="text2">para hrefdos</div>
                    </div>

                </div>
            </div>

        </>

    );
}

export default Header;