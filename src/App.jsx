import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import { useState } from "react";
import { UseStorage } from "./context/context";
import Shop from "./pages/shop/shop";
import Store001 from "./pages/store/store001/store001";
import Store002 from "./pages/store/store002/store002";


function App() {

  const [openMenu, setOpenMenu] = useState(false)
  const [calc, setCalc] = useState(false)
  return (
    <>
    <UseStorage>
      <HashRouter>
        <Header  setOpenMenu={setOpenMenu} openMenu={openMenu} setCalc={setCalc} calc={calc}/>
        <Routes>
          <Route path='/' element={<Home setOpenMenu={setOpenMenu}/>} />
          <Route path='/vendas1' element={<Store001 setCalc={setCalc} />}/>
          <Route path='/vendas2' element={<Store002 setCalc={setCalc} />}/>
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </HashRouter>
    </UseStorage>
    </>
  );
}

export default App;
