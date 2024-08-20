
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupComp from './Component/SignupComp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComp from './Component/LoginComp';
import HomeComp from './Component/HomeComp';
import { CartProvider } from './Context/CartContext';
import CartComp from './Component/CartComp';

function App() {

  return (
    <>
  {/* <SignupComp/> */}
  <CartProvider>

  <Router>
      <Routes>
        <Route path="/register" element={<SignupComp />} />
        <Route path="/" element={<LoginComp/>} />

        <Route path="/home" element={<HomeComp/>} />
        <Route path="/cart" element={<CartComp/>} />

      </Routes>
    </Router>

    </CartProvider>

    </>
  )
}

export default App
