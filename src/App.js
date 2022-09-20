import {Home} from '../src/Components/Page/Home/Home';
import { Route, Routes } from "react-router-dom"
import {Products} from '../src/Components/Page/Products/Products';
import {Register} from '../src/Components/Page/Register/Register';
import {Terminos} from '../src/Components/Page/Terminos_Condiciones/Terminos';
import {Politicas} from './Components/Page/Politicas_Cond/Politicas';
import {Contact} from './Components/Page/Contact/Contact';
import { Login } from './Components/Page/Login/Login';
import { Car } from './Components/Page/Car/Car';



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
      </Routes>
    </div>
    
  );
}

export default App;