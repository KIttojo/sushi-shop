import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import Header from './Components/Header';
import AdminHeader from './Components/Admin/Header';
import Products from './Components/Products';
import ProductPage from './ProductPage';
import ShoppingCart from './Components/ShoppingCart';
import DashBoard from './Components/Admin/Dashboars';
import AdminLogin from './Components/Admin/Login';

import {
  Routes,
  Route,
} from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const App = () => {
  const [card, setCard] = useState([]);
  const [userInfo, setUserInfo] = useState({name: '', phone: '', role: 'user'});
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo])

  const state = useSelector(state => state.cash);
  const {pathname} = useLocation();
  return (
    <div className="App">
      {pathname.includes('/admin') ? 
        <AdminHeader setUserInfo={setUserInfo}/> : 
        <Header
          userInfo={userInfo}
          card={card}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          setUserInfo={setUserInfo}
        />
      }

      <Routes>
        <Route path="/" element={<Products />} />
        <Route 
          path="product/:productId" 
          element={<ProductPage setCard={setCard}/>}
        />
        <Route path="/cart" element={<ShoppingCart card={card} setCard={setCard} userInfo={userInfo}/>} />
        <Route path="/admin" element={<AdminLogin setUserInfo={setUserInfo}/>} />
        {userInfo.role === 'admin' && <Route path="/admin/dashboard" element={<DashBoard />} />}
        {/* <Route path="/admin/dashboard" element={<DashBoard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
