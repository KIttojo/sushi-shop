import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import ProductPage from './ProductPage';
import ShoppingCart from './Components/ShoppingCart';
import {
  Routes,
  Route,
} from "react-router-dom";
import {  useDisclosure } from '@chakra-ui/react';

const App = () => {
  const [card, setCard] = useState([]);
  const [userInfo, setUserInfo] = useState({name: '', phone: ''});
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <Header
        userInfo={userInfo}
        card={card}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        setUserInfo={setUserInfo}
      />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route 
          path="product/:productId" 
          element={<ProductPage setCard={setCard}/>}
        />
        <Route path="/cart" element={<ShoppingCart card={card} setCard={setCard}/>} />
      </Routes>
    </div>
  );
}

export default App;
