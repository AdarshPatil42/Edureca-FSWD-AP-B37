import React, { useEffect, useState }  from 'react';
import "../styles/StarProduct.css";


function CartList({cart}){
    const [CART, setCART]= useState([]);
    const [price, setPrice]= useState(0);

    useEffect(()=>{
        setCART(cart);
    },[cart]);

    const handleRemove = (id)=>{
        const arr = cart.filter((cartItem)=>cartItem.id !==id);
        setCART(arr);
        handlePrice();
    }

    const handlePrice = ()=>{
        let ans =0;
        cart.map((cartItem)=>(ans+= cartItem.amount * cartItem.price));
        setPrice(ans);
    };

    useEffect(()=>{
        handlePrice();
    });

    return (
        <div className='h-100 cartBody'>
            <h1 className='cartheding'>Cart List</h1>
            <div className='container h-100 py-5'>
            {
                CART?.map((cartItem,cartIndex)=>{
                    return(
                        <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col-10 card rounded-3 mb-4 card-body p-4'>
                        <div className='row d-flex justify-content-between align-items-center'>
                            <img className='col-md-1 cartImg' src={cartItem.image}   alt=''/>
                            <span>{cartItem.name}</span>
                            <div className=''>
                            <button onClick={()=>{
                                const _CART= CART.map((item, index)=>{
                                    return cartIndex=== index ? {...item, quantity: item.quantity>0 ? item.quantity -1 : 0}:item 
                                })
                                setCART(_CART)
                            }}
                            > - </button><span>    </span>
                            <span>{cartItem.quantity}</span>
                            <span>    </span>
                            <button onClick={()=>{
                                const _CART= CART.map((item, index)=>{
                                    return cartIndex=== index ? {...item, quantity: item.quantity+1}:item 
                                })
                                setCART(_CART)
                            }}> + </button>
                            </div>
                            <span> ₹ {cartItem.price * cartItem.quantity} /-</span>
                            {/* <span ><i className='fa-solid fa-trash' ></i></span> */}
                            <button className='btn-danger' onClick={()=> handleRemove(cartItem.id)}>X</button>
                            
                        </div>
                        </div>
                        </div>
                    )
                })
                
            }
            <p className='totalAmount '>Total : <span></span>
                {
                    CART.map(item=>item.price * item.quantity).reduce((total, value)=> total + value, 0 )
                } /-
                
            </p>
            <div className='payBtn'>
                <button type="button" className="btn btn-primary btn-block btn-lg">Proceed to Pay</button>
            </div>
            </div>
        </div>
    )
}

export default CartList