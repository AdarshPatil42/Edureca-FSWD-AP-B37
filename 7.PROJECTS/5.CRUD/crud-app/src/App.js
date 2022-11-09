import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Home from "./components/pages/Home.js";
import View from "./components/pages/View.js";
import Edit from "./components/pages/Edit.js";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/view/:id' element={<View/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
