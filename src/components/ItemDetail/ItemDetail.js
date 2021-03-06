import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../Context/CardContext';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext);

    const cardStyle = {
        background: 'linear-gradient(to right bottom, #D9104D 5%, #ffffff 95%)'
    }

    const [amountToBuy, setAmountToBuy] = useState(0);

    const onAdd = ( amount ) => {
        setAmountToBuy( amount );
        addItem({item, amount})
    }

    return (
        <div className="row justify-content-center">
            <div className="m-3">
                
                { item.loading && <p>Loading...</p> }
                { !item.loading &&
                    <div className="col animate__animated animate__fadeIn">
                    <div className="card border-dark" style={cardStyle}>
                        <img className="m-3" alt={item.data.description} src={ process.env.PUBLIC_URL + `/productos/${item.data.img}`} />
                        <div className="card-body">
                            <h5 className="card-title">{ item.data.name }</h5>
                            <p className="card-text">{ item.data.description }</p>
                            <p className="card-text">{ item.data.stock }</p>
                            <p className="card-text">{ item.data.color }</p>
                            <p className="card-text text-end text-muted">$ { item.data.price }</p>
                            {amountToBuy === 0 && 
                                <ItemCount 
                                    stock = {10}
                                    initial = {1}
                                    onAdd = {onAdd}
                                />
                            }
                            {amountToBuy !== 0 &&
                                <div className="container">    
                                    <div className="row">
                                        <NavLink className="btn btn-outline-dark mb-2" exact to={'/cart'}>Terminar mi compra</NavLink>
                                    </div>
                                </div>
                            }
                            </div>
                    </div>
                    </div>
                }
            </div>
        </div>
    );
}