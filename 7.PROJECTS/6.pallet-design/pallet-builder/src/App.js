import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Menu from "./components/Menu";
import Layer from "./components/Layer";
import Sidebar from "./components/Sidebar";
import Project from "./components/pages/Project";
import Product from "./components/pages/Product";
import Pallet from "./components/pages/Pallet";
import Palletizing from "./components/pages/Palletizing";
import "./index.css"
import AutoStack from "./components/pages/AutoStack";
import Recorder from "./components/pages/Recorder";
import Setting from "./components/pages/Setting";

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex app-main">
    <div className="side">
    <Sidebar/>
    </div>
    <div className="menu-list">
    <Routes>
    <Route path="/" element={<Menu/>}/>
    
    <Route path="/menu" element={<Menu/>}>
      <Route path="menu/project" element={<Project/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="pallet" element={<Pallet/>}/>
      <Route path="palletizing" element={<Palletizing/>}/>
    </Route>
      <Route path="/layer" element={<Layer/>}>
        <Route path="autostack" element={<AutoStack/>}/>
        <Route path="recorder" element={<Recorder/>}/>
        <Route path="setting" element={<Setting/>}/>
      </Route>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
