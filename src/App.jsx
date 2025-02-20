import './App.css'
import Home from './home/Home';
import Register from './register/Register'
import Signin from './signin/Signin'
import Navbar from './navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/register' element ={<Register />}/>
        <Route path ='/signin' element = {<Signin />}/>
        <Route path = '/' element ={<Home/>}/>
      </Routes>
    </Router>

  )
}

export default App
