import { Home } from '../src/Components/Page/Home/Home';
import axios from "axios";
import { useState } from 'react'
import { Route, Routes, Navigate, useNavigate } from "react-router-dom"
import { Products } from '../src/Components/Page/Products/Products';
import { Register } from '../src/Components/Page/Register/Register';
import { Terminos } from '../src/Components/Page/Terminos_Condiciones/Terminos';
import { Politicas } from './Components/Page/Politicas_Cond/Politicas';
import { Contact } from './Components/Page/Contact/Contact';
import { Login } from './Components/Page/Login/Login';
import { Car } from './Components/Page/Car/Car';
import { MyAcount } from './Components/Page/MyAcount/MyAcount';
import { Direction } from './Components/Page/Direction/Direction';
import { Password } from './Components/Page/Password/Password';
import { Tarjet } from './Components/Page/Tarjet/Tarjet';
import { ListaDeseos } from './Components/Page/ListaDeseos/ListaDeseos';
import { Buy } from './Components/Page/Buy/Buy';
import { Direction_pago } from './Components/Page/DIrection_pago/Direction_pago';
import { Pago } from './Components/Page/Pago/Pago';



function App() {



  let navigate = useNavigate();
  /*validaciones login*/
  const [messagesLogin, setmessagesLogin] = useState("")
  const [alertUserLogin, setalertUserLogin] = useState(false)
  const [alertHome, setalertHome] = useState(false)
  const [alertConexionLogin, setalertConexionLogin] = useState(false)
  const [valiLogin, setvaliLogin] = useState(false)
  const [valiLoginAdmin, setvaliLoginAdmin] = useState(false)

  const [userLogin, setuserLogin] = useState("")

  const [passwordUser, setpasswordUser] = useState("")

  const onChangeUserLogin = ({ currentTarget }) => setuserLogin(currentTarget.value);

  const onChangePasswordLogin = ({ currentTarget }) => setpasswordUser(currentTarget.value);

  const getApi = () => {
    axios.get('https://apiprojectmain.herokuapp.com/api/users')
      .then(function (response) {
        // handle success
        response.data.map(data => {

          if (userLogin === data.email && passwordUser === data.password) {
            setvaliLogin(true);
            setalertHome(true);
            setmessagesLogin("bienvenido "+data.name)
            
          } else if(userLogin !== data.email && passwordUser !== data.password){
            setmessagesLogin("usuario no registrado")
           
          }
          return console.log("data obtenida");
        });



      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setmessagesLogin(error.message);
      })
  }

  const ClickLogin = (e) => {
    e.preventDefault()
    if (userLogin === "admin@gmail.com" && passwordUser === "admin1234") {
      setvaliLogin(true);
      setalertHome(true);
      setvaliLoginAdmin(true)
      setmessagesLogin("Bienvenido admin")
    } else if (userLogin !== "admin@gmail.com" || passwordUser !== "admin1234") {
      getApi()
    }

  }
  const [shown2, setShown2] = useState(false);
  const switchShown2 = (event) => {
    setShown2(!shown2)
    event.preventDefault()
  };

  const onClick2 = () => {
    setalertUserLogin(false)
    setmessagesLogin("")
    setuserLogin("")
    setpasswordUser("")

  }
  /*fin validaciones login*/

  /*inicio validaciones register*/
  const [alertUser, setalertUser] = useState(false)
  const [alertConexion, setalertConexion] = useState(false)
  const [validUsername, setvalidUsername] = useState('');
  const [messages, setmessages] = useState("")
  const [validemail, setvalidemail] = useState('.@');
  const [usernameRegister, setusernameRegister] = useState("")
  const [passwordRegister, setpasswordRegister] = useState("")
  const [confrimPasword, setconfrimPasword] = useState("")
  const [emailRegister, setemailRegister] = useState("")
  const onChangeusernameRegister = ({ currentTarget }) => setusernameRegister(currentTarget.value);
  const onChangepasswordRegister = ({ currentTarget }) => setpasswordRegister(currentTarget.value);
  const onChangeemailRegister = ({ currentTarget }) => setemailRegister(currentTarget.value);
  const onChangeconfrimPasword = ({ currentTarget }) => setconfrimPasword(currentTarget.value);



  const postApi = (e) => {

    e.preventDefault()
    if ((usernameRegister.indexOf('`') !== -1 || usernameRegister.indexOf('.') !== -1 || usernameRegister.indexOf('@') !== -1 || usernameRegister.indexOf('!') !== -1 || usernameRegister.indexOf('%') !== -1 || usernameRegister.indexOf('$') !== -1 || /\s/.test(usernameRegister)) || (emailRegister.indexOf('.') === -1 || emailRegister.indexOf('@') === -1 || /\s/.test(emailRegister))) {
      console.log("error");
    } else {
      axios.post('https://apiprojectmain.herokuapp.com/api/users', {
        "name": usernameRegister,
        "email": emailRegister,
        "password": passwordRegister
      })
        .then(function (response) {
          // handle success
          console.log(response.data);

          navigate('login')

          //response.data.map((data => console.log(data)));
        })
        .catch(function (error) {
          // handle error
          setmessages(error.message)

        });
      setusernameRegister("")
      setpasswordRegister("")
      setconfrimPasword("")
      setemailRegister("")
      setmessages("")
      setalertUser(false)
      setalertConexion(false)


    }

    setvalidUsername(usernameRegister)
    setvalidemail(emailRegister)
    console.log(messages);
  }

  const [shown, setShown] = useState(false);
  const switchShown = (event) => {
    setShown(!shown)
    event.preventDefault()
  };
  const onClick = () => {
    setusernameRegister("")
    setpasswordRegister("")
    setconfrimPasword("")
    setemailRegister("")
    setmessages("")
    setalertUser(false)
    setalertConexion(false)

  }

  /*fin validaciones register*/




  return (
    <div>
      <Routes>
        <Route path="/" element={<Home  valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/products" element={<Products valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/register" element={valiLogin ? <Navigate replace to="/account" /> : <Register switchShown={switchShown} shown={shown} onClick={onClick} alertConexion={alertConexion} setalertConexion={setalertConexion} alertUser={alertUser} setalertUser={setalertUser} setmessages={setmessages} messages={messages} validemail={validemail} validUsername={validUsername} confrimPasword={confrimPasword} onChangeconfrimPasword={onChangeconfrimPasword} postApi={postApi} emailRegister={emailRegister} passwordRegister={passwordRegister} usernameRegister={usernameRegister} onChangeemailRegister={onChangeemailRegister} onChangepasswordRegister={onChangepasswordRegister} onChangeusernameRegister={onChangeusernameRegister} />} />
        <Route path="/terminos" element={<Terminos valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/politicas" element={<Politicas valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/contact" element={<Contact valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/login" element={valiLogin ? <Navigate replace to="/account" /> : <Login setalertConexionLogin={setalertConexionLogin} alertConexionLogin={alertConexionLogin} alertUserLogin={alertUserLogin} setalertUserLogin={setalertUserLogin} messagesLogin={messagesLogin} onClick2={onClick2} switchShown2={switchShown2} shown2={shown2} userLogin={userLogin} ClickLogin={ClickLogin} passwordUser={passwordUser} onChangePasswordLogin={onChangePasswordLogin} onChangeUserLogin={onChangeUserLogin} />} />
        <Route path="/car" element={<Car valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/account" element={valiLogin ? <MyAcount setalertHome={setalertHome} alertHome={alertHome} valiLoginAdmin={valiLoginAdmin} />:<Navigate replace to="/" />} />
        <Route path="/direction" element={<Direction />} />
        <Route path="/password" element={<Password />} />
        <Route path="/tarjet" element={<Tarjet />} />
        <Route path="/lista-deseos" element={<ListaDeseos />} />
        <Route path="/compra" element={<Buy />} />
        <Route path="/pago" element={<Direction_pago />} />
        <Route path="/pago_final" element={<Pago />} />
      </Routes>
    </div>

  )
}

export default App;