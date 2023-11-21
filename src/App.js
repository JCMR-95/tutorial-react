import NavBar from './components/UI/NavBar';
import Layout from './components/UI/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
//import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="bg-accent min-h-screen">
      <NavBar></NavBar>
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/products/:id" element={<Products></Products>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
