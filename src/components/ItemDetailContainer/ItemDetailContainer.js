import React, { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';

const itemToDetail = {
        id: '2',
        name: 'Gabinete',
        description: 'Gabinete de la marca MLA',
        price: 4000,
        stock: 5,
        color: 'negro',
        img: 'gabinete.png'
}

const itemToDetailPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(itemToDetail);
    }, 2000);
});

export const ItemDetailContainer = () => {

    const[item, setItem] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {
        itemToDetailPromise.then( data => {
            setItem({
                data: data,
                loading: false
            });
        });
    }, []);

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