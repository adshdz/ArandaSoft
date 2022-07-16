import React from 'react';
import { NavLink } from "react-router-dom"
function Header(props) {
    return (
        <>
            <div className="headform">
                <div className="header">
                    <div className="title">
                        <span className="text1">Recipe<span className="text2">App</span></span>
                    </div>
                  
                    <div className="icoHome"></div>
                </div>

                <div className="imgHead">
                    <div className="floatText">
                        <div className="text1">Recetas</div>
                        <div className="text2">para todos</div>
                    </div>

                </div>
            </div>

        </>

    );
}

export default Header;