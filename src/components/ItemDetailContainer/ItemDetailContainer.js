import React, { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';

const itemToDetail = 
// [
    {
        id: '0',
        name: 'Monitor Gamer',
        description: 'Monitor Gamer de la marca MLA',
        price: 60000,
        stock: 15,
        color: 'negro',
        img: 'monitorgamer.jpg'
    }
//     },
//     {
//         id: '1',
//         name: 'Mouse Gamer',
//         description: 'Mouse Gamer de la marca MLA',
//         price: 6000,
//         stock: 20,
//         color: 'negro',
//         img: 'mousegamer.png'
//     },
// {
//         id: '2',
//         name: 'Gabinete',
//         description: 'Gabinete de la marca MLA',
//         price: 4000,
//         stock: 5,
//         color: 'negro',
//         img: 'gabinete.png'
// },
// {
//     id: '3',
//     name: 'buzo.png',
//     description: 'Buzo de la marca MLA',
//     price: 3000,
//     stock: 10,
//     color: 'negro',
//     img: 'buzo.png'
// },
// {
//     id: '4',
//     name: 'Pantalon',
//     description: 'Pantalon de la marca MLA',
//     price: 4500,
//     stock: 20,
//     color: 'negro',
//     img: 'pantalon.png'
// },
// {
//     id: '5',
//     name: 'Remera',
//     description: 'Remera de la marca MLA',
//     price: 1500,
//     stock: 30,
//     color: 'negro',
//     img: 'remera.png'
// }
// ];

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