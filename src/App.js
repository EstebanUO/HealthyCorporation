import {Home} from '../src/Components/Page/Home/Home';
import { Route, Routes } from "react-router-dom"
import {Products} from '../src/Components/Page/Products/Products';
import {Register} from '../src/Components/Page/Register/Register';
import {Terminos} from '../src/Components/Page/Terminos_Condiciones/Terminos';
import {Politicas} from './Components/Page/Politicas_Cond/Politicas';
import {Contact} from './Components/Page/Contact/Contact';
import { Login } from './Components/Page/Login/Login';
import { Car } from './Components/Page/Car/Car';
import { MyAcount } from './Components/Page/MyAcount/MyAcount';
import { Direction } from './Components/Page/Direction/Direction';
import { Password } from './Components/Page/Password/Password';
import { Tarjet } from './Components/Page/Tarjet/Tarjet';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/terminos" element={<Terminos />}/>
        <Route path="/politicas" element={<Politicas />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/car" element={<Car />}/>
        <Route path="/acount" element={<MyAcount />}/>
        <Route path="/direction" element={<Direction />}/>
        <Route path="/password" element={<Password />}/>
        <Route path="/tarjet" element={<Tarjet />}/>
      </Routes>
    </div>
    
  );
}

export default App;