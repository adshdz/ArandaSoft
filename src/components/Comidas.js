import React, { useContext, useEffect } from 'react';
import { ApiContext } from '../context/ApiContext';
import useGetProducts from '../helper/getProductos';
import createTarjets from '../helper/base';

function Comidas(props) {
    const { setcategoria, api } = useContext(ApiContext);
    function conseguirApi(elemento) {
        setcategoria("vegetarian");
        return elemento;
    }

    const listado = useGetProducts(conseguirApi(api));

        useEffect(()=>{
                createTarjets();
        }, [])


    return (
        <>
            <div id="menuHead2" className="menuHeads">
            </div>
            <div className="middle">
                <div className="middleTitle">Comidas Rapidas</div>
                <div className="contCarrusel">
                    <ul id="carruselini" className="carrusel">

                    </ul>
                    <ul id="carruselfin" className="carrusel">

                    </ul>
                </div>
            </div>
        </>
    );
}

export default Comidas;