import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Cart from "./Pages/Cart";
import Navbar from './Component/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import Details from './Pages/Details';
import AddProduct from "./Pages/AddProduct";
import Login from "./Component/Login";
import PrivateComponent from "./Component/PrivateComponent";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/details" element={<Details />} />
              <Route path="/add_product" element={<AddProduct />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
