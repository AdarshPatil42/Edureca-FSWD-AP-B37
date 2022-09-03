import React  from 'react';



function CartList({cart}){
    

    return (
        <div>
            {
                cart.map((cartItem,cartIndex)=>{
                    return(
                        <div>
                            <img src={cartItem.image} width={60} alt=''/>
                            <span>{cartItem.name}</span>
                            <button>-</button>
                            <span>{cartItem.quantity}</span>
                            <button>+</button>
                            <span>{cartItem.price}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartList