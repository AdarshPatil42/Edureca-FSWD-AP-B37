
import './App.css';
import Home from './home/Home/Home';
import RestaurantDetail from './home/RestaurantCard/RestaurantDetail';
import {Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="restaurant/:id" element={<RestaurantDetail />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
