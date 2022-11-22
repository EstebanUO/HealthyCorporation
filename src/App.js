import { Home } from '../src/Components/Page/Home/Home';
import axios from "axios";
import { useState,useEffect } from 'react'
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
// import { Tarjet } from './Components/Page/Tarjet/Tarjet';
import { ListaDeseos } from './Components/Page/ListaDeseos/ListaDeseos';
import { Buy } from './Components/Page/Buy/Buy';
import { Direction_pago } from './Components/Page/DIrection_pago/Direction_pago';
import { Pago } from './Components/Page/Pago/Pago';
import RecoverPassword from './Components/Page/MyAcount/RecoverPassword';

// import { Zoom_in } from './Components/UI/Zoom_in/Zoom_in';



function App() {

      /*datos encriptacion y desencriptado*/
      const bufferABase64 = buffer => btoa(String.fromCharCode(...new Uint8Array(buffer)));
      const base64ABuffer = buffer => Uint8Array.from(atob(buffer), c => c.charCodeAt(0));
      const LONGITUD_SAL = 16;
      const LONGITUD_VECTOR_INICIALIZACION = LONGITUD_SAL;
      const contraseñaEncriptar = "lfjdnd193016"
      const contraseñaDesencriptar = "lfjdnd193016"

      const derivacionDeClaveBasadaEnContraseña = async (contraseña, sal, iteraciones, longitud, hash, algoritmo = 'AES-CBC') => {
        const encoder = new TextEncoder();
        let keyMaterial = await window.crypto.subtle.importKey(
          'raw',
          encoder.encode(contraseña),
          { name: 'PBKDF2' },
          false,
          ['deriveKey']
        );
        return await window.crypto.subtle.deriveKey(
          {
            name: 'PBKDF2',
            salt: encoder.encode(sal),
            iterations: iteraciones,
            hash
          },
          keyMaterial,
          { name: algoritmo, length: longitud },
          false,
          ['encrypt', 'decrypt']
        );
      }
      const encriptar = async (contraseña, textoPlano) => {
        const encoder = new TextEncoder();
        const sal = window.crypto.getRandomValues(new Uint8Array(LONGITUD_SAL));
        const vectorInicializacion = window.crypto.getRandomValues(new Uint8Array(LONGITUD_VECTOR_INICIALIZACION));
        const bufferTextoPlano = encoder.encode(textoPlano);
        const clave = await derivacionDeClaveBasadaEnContraseña(contraseña, sal, 100000, 256, 'SHA-256');
        const encrypted = await window.crypto.subtle.encrypt(
          { name: "AES-CBC", iv: vectorInicializacion },
          clave,
          bufferTextoPlano
        );
        return bufferABase64([
          ...sal,
          ...vectorInicializacion,
          ...new Uint8Array(encrypted)
        ]);
      };

      const desencriptar = async (contraseña, encriptadoEnBase64) => {
        const decoder = new TextDecoder();
        const datosEncriptados = base64ABuffer(encriptadoEnBase64);
        const sal = datosEncriptados.slice(0, LONGITUD_SAL);
        const vectorInicializacion = datosEncriptados.slice(0 + LONGITUD_SAL, LONGITUD_SAL + LONGITUD_VECTOR_INICIALIZACION);
        const clave = await derivacionDeClaveBasadaEnContraseña(contraseña, sal, 100000, 256, 'SHA-256');
        const datosDesencriptadosComoBuffer = await window.crypto.subtle.decrypt(
          { name: "AES-CBC", iv: vectorInicializacion },
          clave,
          datosEncriptados.slice(LONGITUD_SAL + LONGITUD_VECTOR_INICIALIZACION)
        );
        return decoder.decode(datosDesencriptadosComoBuffer);
      }
      

      /*fin datos*/

  
  const valiLoginAdmin = localStorage.getItem("EmailValidAdmin");
  const valiLogin = localStorage.getItem("EmailValid");
  // const valiLoginUser = localStorage.getItem("EmailValidUser");

  let navigate = useNavigate();
  /*validaciones login*/
  const [messagesLogin, setmessagesLogin] = useState("")
  const [alertUserLogin, setalertUserLogin] = useState(false)
  const [alertUserLoginPassword, setalertUserLoginPassword] = useState(false)
  const [alertHome, setalertHome] = useState(false)
  const [alertConexionLogin, setalertConexionLogin] = useState(false)
  // const [valiLogin, setvaliLogin] = useState(false)
  // const [valiLoginAdmin, setvaliLoginAdmin] = useState(false)

  const [userLogin, setuserLogin] = useState("")

  const [passwordUser, setpasswordUser] = useState("")

  const onChangeUserLogin = ({ currentTarget }) => setuserLogin(currentTarget.value);

  const onChangePasswordLogin = ({ currentTarget }) => setpasswordUser(currentTarget.value);

  /*datos de usuario*/
  // const [idUser, setidUser] = useState(null)
  // const [usernameUser, setusernameUser] = useState("")
  // const [emailUser, setemailUser] = useState("")
  // const [password, setpassword] = useState("")


  const getApi = async() => {
   
    axios.get('https://apiprojectmain.herokuapp.com/api/users')
      .then(function (response) {
        // handle success
        response.data.map(async (data) => {
          
          const desencriptado = await desencriptar(contraseñaDesencriptar, data.password);
          
          if (userLogin === data.email && passwordUser === desencriptado) {
            
            localStorage.setItem("EmailValid", true);
            setalertHome(true);
            // setidUser(data.id);
            localStorage.setItem("idUser", data.id);
            localStorage.setItem("EmailValid", true);
            localStorage.setItem("EmalValidUser", data.email);
            localStorage.setItem("nameUser", data.name);
          
            // setusernameUser(data.name);
            // setemailUser(data.email);
            // setpassword(data.password);
            setmessagesLogin("bienvenido " + data.name)

          } else if (userLogin !== data.email && passwordUser !== desencriptado) {
            
            setmessagesLogin("usuario no registrado")
            setalertConexionLogin(false)
          }else if (userLogin !== data.email || passwordUser !== desencriptado) {
            
            setmessagesLogin("contraseña o email incorrectos")
            setalertConexionLogin(false)
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
      localStorage.setItem("EmailValid", true);
      setalertHome(true);
      // setvaliLoginAdmin(true)
      setmessagesLogin("Bienvenido admin")
      localStorage.setItem("EmailValidAdmin", true);
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
    navigate('register')

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



  const postApi = async(e) => {
    e.preventDefault()

    const encriptado = await encriptar(contraseñaEncriptar, passwordRegister);

    if ((usernameRegister.indexOf('`') !== -1 || usernameRegister.indexOf('.') !== -1 || usernameRegister.indexOf('@') !== -1 || usernameRegister.indexOf('!') !== -1 || usernameRegister.indexOf('%') !== -1 || usernameRegister.indexOf('$') !== -1 || /\s/.test(usernameRegister)) || (emailRegister.indexOf('.') === -1 || emailRegister.indexOf('@') === -1 || /\s/.test(emailRegister))) {
      console.log("error");
    } else {
      axios.post('https://apiprojectmain.herokuapp.com/api/users', {
        "name": usernameRegister,
        "email": emailRegister,
        "password": encriptado
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




  /*----------------- post direccion  falta que identifique el usuario que sera la ubicacion-------------------*/
  
  const [direction, setDirection] = useState("")
  const [location, setLocation] = useState("")
  const [city, setCity] = useState("")
  const [details, setDetails] = useState("")
  const [typeHome, setTypeHome] = useState("")

  const iduser= localStorage.getItem("idUser")

  const postApiDirection = (e) => {
    
    axios.put(`https://apiprojectmain.herokuapp.com/api/users/${iduser}`, {
        "direccion": direction,
        "localidad": location,
        "ciudad": city,
        "detalles": details,
        "tipoVivienda": typeHome
      })
      .catch(function (error) {
        // handle error
        setmessages(error.message)
      });
      setDirection("")
      setLocation("")
      setCity("")
      setDetails("")
      setTypeHome("")
  }

/* ----------------------------------------------------------------------- */

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
    navigate('login')

  }
  /*fin validaciones register*/

      /*carga de productos carrito*/
      const [productos, setProductos] = useState([0,1])
      const [Car2, setCar2] = useState([])
      
      let arr = JSON.parse(localStorage.getItem("car"))
    
  
      useEffect(() => {
          setCar2(arr);
      }, [arr])
  
      const clickCar=()=>{
        
          
        
      }


      /*fin carga carrito*/

      // /* validaciones direcciones  */
    
      
      // const clickDirection = () => {
      //   const Directon_ = localStorage.getItem("direction");
      //     if (Directon_ !== "") {
      //       document.getElementById("text_check2").style.display = 'none'
      //       document.getElementById("text_check3").style.display = 'flex'
      //       document.getElementById("form").style.display = 'none' 
      //       document.getElementById("form2").style.display = 'flex'
            
      //   } else if (Directon_ === null) {
      //       document.getElementById("form").style.display = 'flex'
      //       document.getElementById("form2").style.display = 'none'
      //       document.getElementById("text_check2").style.display = 'flex'
      //       document.getElementById("text_check3").style.display = 'none'

      //   }
      // }


      // /* fin validaciones direcciones  */


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/products" element={<Products clickCar={clickCar} valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/register" element={valiLogin ? <Navigate replace to="/account" /> : <Register switchShown={switchShown} shown={shown} onClick={onClick} alertConexion={alertConexion} setalertConexion={setalertConexion} alertUser={alertUser} setalertUser={setalertUser} setmessages={setmessages} messages={messages} validemail={validemail} validUsername={validUsername} confrimPasword={confrimPasword} onChangeconfrimPasword={onChangeconfrimPasword} postApi={postApi} emailRegister={emailRegister} passwordRegister={passwordRegister} usernameRegister={usernameRegister} onChangeemailRegister={onChangeemailRegister} onChangepasswordRegister={onChangepasswordRegister} onChangeusernameRegister={onChangeusernameRegister} />} />
        <Route path="/terminos" element={<Terminos valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/politicas" element={<Politicas valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/contact" element={<Contact valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/login" element={valiLogin ? <Navigate replace to="/account" /> : <Login alertUserLoginPassword={alertUserLoginPassword} setalertUserLoginPassword={setalertUserLoginPassword} setalertConexionLogin={setalertConexionLogin} alertConexionLogin={alertConexionLogin} alertUserLogin={alertUserLogin} setalertUserLogin={setalertUserLogin} messagesLogin={messagesLogin} onClick2={onClick2} switchShown2={switchShown2} shown2={shown2} userLogin={userLogin} ClickLogin={ClickLogin} passwordUser={passwordUser} onChangePasswordLogin={onChangePasswordLogin} onChangeUserLogin={onChangeUserLogin} />} />
        <Route path="/car" element={<Car productos={productos} valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/account" element={valiLogin ? <MyAcount setalertHome={setalertHome} alertHome={alertHome} valiLoginAdmin={valiLoginAdmin} /> : <Navigate replace to="/" />} />
        <Route path="/direction" element={valiLogin ? <Direction setDirection={setDirection} setLocation={setLocation} setTypeHome={setTypeHome} setCity={setCity} setDetails={setDetails}  postApiDirection={postApiDirection} direction={direction} typeHome={typeHome} location={location} city={city} details={details}/>:<Navigate replace to="/"  />} />
        <Route path="/password" element={valiLogin ? <Password />:<Navigate replace to="/" />} />
        {/* <Route path="/tarjet" element={valiLogin ? <Tarjet />:<Navigate replace to="/" />} /> */}
        <Route path="/lista-deseos" element={valiLogin ? <ListaDeseos />:<Navigate replace to="/login" />} />
        <Route path="/compra" element={<Buy  valiLoginAdmin={valiLoginAdmin} />} />
        <Route path="/pago" element={valiLogin?  <Direction_pago />:<Navigate replace to="/login" />} />
        <Route path="/pago_final" element={valiLogin? <Pago />:<Navigate replace to="/login" />} />
        <Route path="/recoverPassword" element={<RecoverPassword />} />

        {/* <Route path="/prueba" element={<Zoom_in />} /> */}
      </Routes>
    </div>

  )
}

export default App;