import Item from '../Item/Item';

const ItemListContainer = () => {
    const dataProducts = [
        {
            name: 'Monitor Gamer',
            price: 60000,
            stock: 15,
            color: 'negro', 
            img: 'monitorgamer.jpg'
        },
        {
            name: 'Mouse Gamer',
            price: 6000,
            stock: 20,
            color: 'negro', 
            img: 'mousegamer.png'
        }
    ]

    return(
        <div>
            <h2>Productos MLA</h2>
            {dataProducts.map((product)=> {
                return(
                    <Item key={product.name} name={product.name} price={product.price} color={product.color} stock={product.Stock} img={product.img}/>
            )})}
        </div>
    )
}

export default ItemListContainer