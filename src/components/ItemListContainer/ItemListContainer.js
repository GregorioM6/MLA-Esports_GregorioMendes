// import Item from '../Item/Item';
import { ItemCount } from '../ItemCount/ItemCount';

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


export const ItemListContainer = ({ Cantidad }) => {

    const onAdd = (amount) => {
        console.log(amount);
    }

    return (
        <div>
            <h1>{ Cantidad }</h1>
            <ItemCount 
                stock = {10}
                initial = {1}
                onAdd = {onAdd}
            />
        </div>
    );
}

export default ItemListContainer