
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';


import { CarritoProvider } from '../context/CarritoContext';

import { Navbar } from './navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './CheckOut/Checkout';
import { Cart } from './Cart/Cart';



export const App = () => {
  return (
      <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer />}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <ToastContainer/>
        </CarritoProvider>
      </BrowserRouter>  
  );
}

