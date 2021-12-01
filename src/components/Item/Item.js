const Item = ({name, price, color, stock, img}) => {
console.log(img)
    return(
        <div>
            <p>Nombre : {name}</p>
            <p>Precio : {price}</p>
            <p>Color: {color}</p>
            <p>Stock: {stock}</p>
            <img alt={`${img}`} src={ process.env.PUBLIC_URL + `/productos/${img}`} />
        </div>
    )
}
export default Item;