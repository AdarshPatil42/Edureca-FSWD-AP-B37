import './App.css';
import React, {useState} from 'react';
import  PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Slider from './components/Slider';
import data from './data/data.json';
import cartdata from './data/cartData.json';
import Offers from './components/offers.js';
import Heading from './components/Heading.js';
import CartList from './components/CartList';
import StarProduct from './components/StarProduct.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Contactus from './components/Contactus.js';

function App() {

  const [cart, setCart]= useState([]);
  const [showCart, setShowCart]= useState(false);
    const addTOCart = (data)=>{
        setCart([...cart, {...data, quantity:1}]);
    }

  const handleShow=(value)=>{
    setShowCart(value);
  }

  

  return (  
    
    <Router>
      <PreNavbar count={cart.length} handleShow={handleShow}/>
      <Navbar/>
      <Routes>
        <Route  path="/signup" element ={<Signup/>}/> 
        <Route  path="/signin" element ={<Signin/>}/>
      </Routes>
      <Heading text="STAR PRODUCTS"/>
        {
          showCart?
          <CartList cart={cart}/>:
          <StarProduct starProduct={cartdata.starProduct} addTOCart={addTOCart}/>
        }
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/> 
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <Routes>
        <Route exact path="/music" element ={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} />
        <Route exact path="/smartDevice" element ={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path="/home" element ={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  /> } />
        <Route exact path="/lifeStyle" element ={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  /> } />
        <Route exact path="/mobileAccessories" element ={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  /> } />
      </Routes>
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Contactus/>
      <Footer footer={data.footer}/>
    </Router>  
  );
}

export default App;
