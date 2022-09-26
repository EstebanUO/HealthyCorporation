import {Home} from '../src/Components/Page/Home/Home';
import axios from "axios";
import {useState} from 'react'
import { Route, Routes,Navigate,useNavigate } from "react-router-dom"
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

    let navigate = useNavigate();
      /*validaciones login*/ 

      const [valiLogin, setvaliLogin] = useState(false)
      const [valiLoginAdmin, setvaliLoginAdmin] = useState(false)

      const [userLogin, setuserLogin] = useState("")

      const [passwordUser, setpasswordUser] = useState("")
  
      const onChangeUserLogin = ({ currentTarget }) => setuserLogin(currentTarget.value);
  
      const onChangePasswordLogin = ({ currentTarget }) => setpasswordUser(currentTarget.value);

      const getApi=()=>{
          axios.get('http://127.0.0.1:8080/api/users')
          .then(function (response) {
            // handle success
            response.data.map(data=>{

              if (userLogin===data.email && passwordUser===data.password) {
                  setvaliLogin(true);
                  alert("bienvenido "+data.name)
                }
            });

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      }
      
      const ClickLogin=(e)=>{
        e.preventDefault()
        if (userLogin==="admin@gmail.com" && passwordUser==="admin1234") {
          setvaliLogin(true);
          setvaliLoginAdmin(true)
          alert("bienvenido admin")
      }else if(userLogin!=="admin@gmail.com" && passwordUser!=="admin1234"){
        getApi()
      }
          
      }
      /*fin validaciones login*/

      /*inicio validaciones register*/

      const [usernameRegister, setusernameRegister] = useState("")
      const [passwordRegister, setpasswordRegister] = useState("")
      const [confrimPasword, setconfrimPasword] = useState("")
      const [emailRegister, setemailRegister] = useState("")
      const onChangeusernameRegister = ({ currentTarget }) => setusernameRegister(currentTarget.value);
      const onChangepasswordRegister = ({ currentTarget }) => setpasswordRegister(currentTarget.value);
      const onChangeemailRegister = ({ currentTarget }) => setemailRegister(currentTarget.value);
      const onChangeconfrimPasword = ({ currentTarget }) => setconfrimPasword(currentTarget.value);

      const postApi=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8080/api/users',{
            "name":usernameRegister,
            "email":emailRegister,
            "password":passwordRegister
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
            navigate('login')
            
           //response.data.map((data => console.log(data)));
        })
        .catch(function (error) {
            // handle error
            alert(error.message+" sin conexion");
        });
    }

      /*fin validaciones register*/

      
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home valiLoginAdmin={valiLoginAdmin}/>}/>
        <Route path="/products" element={<Products valiLoginAdmin={valiLoginAdmin} />}/>
        <Route path="/register" element={valiLogin? <Navigate replace to="/"/> : <Register confrimPasword={confrimPasword} onChangeconfrimPasword={onChangeconfrimPasword} postApi={postApi} emailRegister={emailRegister} passwordRegister={passwordRegister} usernameRegister={usernameRegister} onChangeemailRegister={onChangeemailRegister} onChangepasswordRegister={onChangepasswordRegister} onChangeusernameRegister={onChangeusernameRegister}/>}/>
        <Route path="/terminos" element={<Terminos valiLoginAdmin={valiLoginAdmin} />}/>
        <Route path="/politicas" element={<Politicas valiLoginAdmin={valiLoginAdmin} />}/>
        <Route path="/contact" element={<Contact valiLoginAdmin={valiLoginAdmin}/>}/>
        <Route path="/login" element={valiLogin? <Navigate replace to="/"/> :<Login userLogin={userLogin} ClickLogin={ClickLogin} passwordUser={passwordUser} onChangePasswordLogin={onChangePasswordLogin} onChangeUserLogin={onChangeUserLogin}/>}/>
        <Route path="/car" element={<Car valiLoginAdmin={valiLoginAdmin} />}/>
        <Route path="/acount" element={<MyAcount valiLoginAdmin={valiLoginAdmin}/>}/>
        <Route path="/direction" element={<Direction />}/>
        <Route path="/password" element={<Password />}/>
        <Route path="/tarjet" element={<Tarjet />}/>
      </Routes>
    </div>
    
  );
}

export default App;