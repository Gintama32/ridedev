import './App.css'
import Home from './pages/home/Home';
import Register from './pages/register/Register'
import Signin from './pages/signin/Signin'
import Navbar from './components/navbar/Navbar'
import MyRide from './pages/myRide/MyRide'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostRide from './pages/postRide/PostRide';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/register' element ={<Register />}/>
        <Route path ='/signin' element = {<Signin />}/>
        <Route path = '/' element ={<Home/>}/>
        <Route path ='/myride' element = {<MyRide/>}/>
        <Route path ='/postride' element = {<PostRide/>}/>
      </Routes>
    </Router>

  )
}

export default App
