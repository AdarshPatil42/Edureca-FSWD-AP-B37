import React , { useState }from 'react';
import "../styles/StarProduct.css";
import CartList from './CartList';

const StarProduct = ({starProduct}) => {
    
    const [cart, setCart]= useState([]);
    console.log(cart);
    const addTOCart = (data)=>{
        setCart([...cart, {...data, quantity:1}]);
    }
    return (
        <div>
        <div className='flex'>
            {
                starProduct.map((productItem, productIndex)=>{
                    return(
                        <div >
                            <div className='product-card  '>
                                <img className='img' src={productItem.image} alt=''/>
                                <p>{productItem.name} | {productItem.category}</p>
                                <p>{productItem.seller}</p>
                                <p> {productItem.price}</p>
                                <button onClick={()=>addTOCart(productItem)}>Add to cart</button>
                            </div>
                            
                            
                        </div>
                    )
                })
            }
            <CartList cart={cart}/>
        </div>
        </div>
    )
}

export default StarProduct


// const StarProduct = ({starProduct}) => {
//     return (
//         <div className='flex'>
//             {/* <div> <a href={starProduct[0].url}> <img src={starProduct[0].image} alt="1st Product" /></a></div> */}
//             {/* <div>
//                 <a href={starProduct[1].url}> <img src={starProduct[1].image} alt="1st Product" /></a>
//                 <a href={starProduct[2].url}> <img src={starProduct[2].image} alt="1st Product" /></a>
//                 <a href={starProduct[3].url}> <img src={starProduct[3].image} alt="1st Product" /></a>
//             </div> */}

//             {/* New Product list for add to cart */}
//         </div>
//     )
// }