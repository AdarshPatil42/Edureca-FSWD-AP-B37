import React, { useState } from 'react';
import "../styles/StarProduct.css";

const cartIcon = <svg className="temp" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>


const StarProduct = ({starProduct, addTOCart}) => {
    const [filter, setFilter] = useState('');

    const searchItem =(e)=>{
        setFilter(e.target.value)
    }
    let dataSearch = starProduct.filter(item=>{
        return Object.keys(item).some(keys=>
            item[keys].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })
    return (
        <div>
            <div className="form-control bg-success  text-center search">
                <input 
                    className="col-6" 
                    type="text" 
                    name="search"  
                    placeholder="Search Products"
                    value={filter}
                    onChange={searchItem.bind(this)}
                    />
                    <span>    </span>
                {searchIcon}
            </div>
        <div className='flex justify-content-center '>
            {
                dataSearch.map((productItem, productIndex)=>{
                    return(
                        <div className='pr ' >
                            <div className='product-card '>
                                <img className='img' src={productItem.image} alt=''/>
                                <p>{productItem.name} | {productItem.category}</p>
                                <p>{productItem.seller}</p>
                                <p> ₹ {productItem.price} /-</p>
                                <button className="btn btn-danger">Buy</button>
                                <button className="btn btn-primary" onClick={()=>{addTOCart(productItem)}}>{cartIcon}</button>
                            </div>
                        </div>
                    )
                })
            }
            
            
        </div>
        </div>
    )
}

export default StarProduct


