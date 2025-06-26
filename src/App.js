
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Login from './screens/Login';
// import '../node_modules/node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../node_modules/node_modules/bootstrap-dark-5/dist/css'
// import '../node_modules/node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signup from './screens/Signup';
import MyOrder from './screens/MyOrder';
import { CartProvider } from './components/CoontextReducer';
import Cart from './screens/Cart'






function App() {
  return (
    <CartProvider>
    <Router>
      <div >
        <Routes><Route exact path='/' element={<Home/>} /> </Routes>
        <Routes><Route exact path='/login' element={<Login/>} /> </Routes>
        <Routes><Route exact path='/createuser' element={<Signup/>} /> </Routes>
        <Routes><Route exact path='/myOrder' element={<MyOrder/>} /> </Routes>
        <Routes>
  <Route path="/cart" element={<Cart />} />
</Routes>



      </div>
    </Router>
    </CartProvider>


  );
}

export default App;
