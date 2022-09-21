import {Home} from '../src/Components/Page/Home/Home';
import {useState} from 'react'
import { Route, Routes,Navigate } from "react-router-dom"
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
      /*validaciones login*/ 

      const [valiLogin, setvaliLogin] = useState(false)
      const [valiLoginAdmin, setvaliLoginAdmin] = useState(false)

      const [userLogin, setuserLogin] = useState("")

      const [passwordUser, setpasswordUser] = useState("")
  
      const onChangeUserLogin = ({ currentTarget }) => setuserLogin(currentTarget.value);
  
      const onChangePasswordLogin = ({ currentTarget }) => setpasswordUser(currentTarget.value);


      
      const ClickLogin=()=>{

        if (userLogin==="admin" && passwordUser==="admin1234") {
            setvaliLogin(true);
            setvaliLoginAdmin(true)
        }

      }
      /*fin validaciones login*/
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home valiLoginAdmin={valiLoginAdmin}/>}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/register" element={valiLogin? <Navigate replace to="/"/> : <Register />}/>
        <Route path="/terminos" element={<Terminos />}/>
        <Route path="/politicas" element={<Politicas />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={valiLogin? <Navigate replace to="/"/> :<Login userLogin={userLogin} ClickLogin={ClickLogin} passwordUser={passwordUser} onChangePasswordLogin={onChangePasswordLogin} onChangeUserLogin={onChangeUserLogin}/>}/>
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