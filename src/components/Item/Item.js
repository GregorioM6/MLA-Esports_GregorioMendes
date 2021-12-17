import React from 'react';

export const Item = ({ id, name, description, price, stock, color, img}) => {

    const cardStyle = {
        background: 'linear-gradient(to right bottom, #808080 5%, #E4E8EF 95%)'
    }

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card border-dark" style={cardStyle}>
                <img className="m-3" alt={description} src={ process.env.PUBLIC_URL + `/productos/${img}`} />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">{ description }</p>
                    <p className="card-text">{ stock }</p>
                    <p className="card-text">{ color }</p>
                    <p className="card-text text-end text-muted">$ { price }</p>
                </div>
            </div>
        </div>
    )
}