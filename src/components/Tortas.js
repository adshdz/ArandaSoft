import React, { useContext, useEffect } from 'react';
import { ApiContext } from '../context/ApiContext';
import useGetProducts from '../helper/getProductos';
import createTarjets from '../helper/base';

function Tortas(props) {
    const { setcategoria, api } = useContext(ApiContext);
    function conseguirApi(elemento) {
        setcategoria("tortas");
        return elemento
    }
    const listado = useGetProducts(conseguirApi(api));
   
    useEffect(() => {
        setTimeout(() => {
            createTarjets();
        }, 1000)

    }, []);

    return (
        <>
            <div id="menuHead2" className="menuHeads">
            </div>
            <div className="middle">
                <div className="middleTitle">Tortas</div>
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
export default Tortas;