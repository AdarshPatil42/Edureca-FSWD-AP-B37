import React from 'react';
import "../styles/StarProduct.css";



const StarProduct = ({starProduct, addTOCart}) => {
    
    return (
        <div className='flex'>
            {
                starProduct.map((productItem, productIndex)=>{
                    return(
                        <div className='pr ' >
                            <div className='product-card  '>
                                <img className='img' src={productItem.image} alt=''/>
                                <p>{productItem.name} | {productItem.category}</p>
                                <p>{productItem.seller}</p>
                                <p> ₹ {productItem.price} /-</p>
                                <button className="btn btn-primary" onClick={()=>{addTOCart(productItem)}}>Add to cart</button>
                            </div>
                        </div>
                    )
                })
            }
            
            
        </div>
    )
}

export default StarProduct


