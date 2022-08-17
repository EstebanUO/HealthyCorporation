import {Home} from '../src/Components/Page/Home/Home';
import { Route, Routes } from "react-router-dom"
import {Products} from '../src/Components/Page/Products/Products';
import {Register} from '../src/Components/Page/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
    
  );
}

export default App;
