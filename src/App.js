import {Home} from '../src/Components/Page/Home/Home';
import { Route, Routes } from "react-router-dom"
import {Products} from '../src/Components/Page/Products/Products';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </div>
    
  );
}

export default App;
