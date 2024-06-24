import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import { UseStorage } from "./context/context";
import Store001 from "./pages/store/store001/store001";
import Store002 from "./pages/store/store002/store002";


function App() {


  return (
    <>
    <UseStorage>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vendas1' element={<Store001 />}/>
          <Route path='/vendas2' element={<Store002 />}/>
        </Routes>
      </HashRouter>
    </UseStorage>
    </>
  );
}

export default App;
