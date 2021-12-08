import React from 'react'
import { Item } from '../Item/Item';

export const ItemList = ({ productos }) => {

    return (
        <div className="m-3 row row-cols-1 row-cols-md-5 g-4">

            { productos.loading && <p>Loading...</p> }  

            {
                productos.data.map(x => (
                    <Item 
                        key = { x.id }
                        name = { x.name }
                        description = { x.description }
                        price = { x.price }
                        color = { x.color }
                        stock = { x.stock }
                        img = { x.img }
                    />
                ))
            }
        </div>
    )
}