
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupComp from './Component/SignupComp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComp from './Component/LoginComp';

function App() {

  return (
    <>
  {/* <SignupComp/> */}
  <Router>
      <Routes>
        <Route path="/register" element={<SignupComp />} />
        <Route path="/" element={<LoginComp/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
