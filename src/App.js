import {Home} from '../src/Components/Page/Home/Home';
import { Route, Routes } from "react-router-dom"
import {Products} from '../src/Components/Page/Products/Products';
import {Register} from '../src/Components/Page/Register/Register';
import {Terminos} from '../src/Components/Page/Terminos_Condiciones/Terminos';
import { Login } from './Components/Page/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/terminos" element={<Terminos />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
    
  );
}

export default App;
