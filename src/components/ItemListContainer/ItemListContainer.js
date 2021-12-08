// import Item from '../Item/Item';
// import { ItemCount } from '../ItemCount/ItemCount';

// const ItemListContainer = () => {
//     const dataProducts = [
//         {
//             name: 'Monitor Gamer',
//             price: 60000,
//             stock: 15,
//             color: 'negro', 
//             img: 'monitorgamer.jpg'
//         },
//         {
//             name: 'Mouse Gamer',
//             price: 6000,
//             stock: 20,
//             color: 'negro', 
//             img: 'mousegamer.png'
//         }
//     ]

//     return(
//         <div>
//             <h2>Productos MLA</h2>
//             {dataProducts.map((product)=> {
//                 return(
//                     <Item key={product.name} name={product.name} price={product.price} color={product.color} stock={product.Stock} img={product.img}/>
//             )})}
//         </div>
//     )
// }


// export const ItemListContainer = ({ Cantidad }) => {

//     const onAdd = (amount) => {
//         console.log(amount);
//     }

//     return (
//         <div>
//             <h1>{ Cantidad }</h1>
//             <ItemCount 
//                 stock = {10}
//                 initial = {1}
//                 onAdd = {onAdd}
//             />
//         </div>
//     );
// }

// export default ItemListContainer

import React, { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList';


const productList = [
    {
        id: '0',
        name: 'Monitor Gamer',
        description: 'Monitor Gamer de la marca MLA',
        price: 60000,
        stock: 15,
        color: 'negro',
        img: 'monitorgamer.jpg'
    },
    {
        id: '1',
        name: 'Mouse Gamer',
        description: 'Mouse Gamer de la marca MLA',
        price: 6000,
        stock: 20,
        color: 'negro',
        img: 'mousegamer.png'
    }
];

const productListPromise = new Promise((resolve, reject) => {
    console.log('Esperando 2 segundos');
    setTimeout(function() {
    resolve(productList);
    }, 2000);
});

export const ItemListContainer = ({ greetings }) => {
    
    const [productos, setProductos] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {
        productListPromise.then( data => {
            setProductos({
                data: data,
                loading: false
            })
        })
    }, []);

    return (
        <div className="m-3">
            <h1>{ greetings }</h1>
            <ItemList productos = { productos } />
        </div>
    );

}

export default ItemListContainer
