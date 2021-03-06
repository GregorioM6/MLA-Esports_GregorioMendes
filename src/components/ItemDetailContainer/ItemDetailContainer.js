import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { productList } from '../../ProductosCompras/ProductosCompras';
import { ItemDetail } from '../ItemDetail/ItemDetail';

const productListPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
    resolve(productList);
    }, 2000);
});

export const ItemDetailContainer = () => {

    const { id } = useParams();

    const[item, setItem] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {
        productListPromise.then( data => {              
            setItem({
                data: data.find( product => product.id === parseInt(id) ),
                loading: false
            });   
        });  
    }, [id]);

    return (
        <div className="m-3 row justify-content-center">
            <div className="m-3 col-4 text-center">
                <h1>Item Detail Container</h1>
                <ItemDetail item = { item } />
            </div>
        </div>
    );
}

export default ItemDetailContainer