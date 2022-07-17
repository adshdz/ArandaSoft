import React from 'react';

function Header(props) {


    return (
        <>
            <div className="headform">
                <div className="header">
                    <div className="title">
                        <span className="text1">Recipe<span className="text2">App</span></span>
                    </div>

                    <div className="menuHead">
                    <ul>
                        <li><a href="/" className={({isActive}) =>isActive?"seleccionado" :"selected" }>Home</a></li>
                        <li><a href='/comidas' className={({isActive}) =>isActive?"seleccionado" :"selected"}>Comida R&aacute;pida</a></li>
                        <li><a href="/menus" className={({isActive}) =>isActive?"seleccionado" :"selected"}>Men&uacute; Ni&ntilde;os</a></li>
                        <li><a href="/principales" className={({isActive}) =>isActive?"seleccionado" :"selected"}>Platos Principales</a></li>
                        <li><a href="/sopas" className={({isActive}) =>isActive?"seleccionado" :"selected"}>Sopas</a></li>
                        <li><a href="/tortas" className={({isActive}) =>isActive?"seleccionado" :"selected"}>Tortas</a></li>
                        <li><a href="/vegetarianos" className={({isActive}) =>isActive?"seleccionado" :"selected"}>Vegetarianos</a></li>
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