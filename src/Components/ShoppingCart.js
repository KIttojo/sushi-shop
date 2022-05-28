import { 
  Box, 
  Text, 
  Flex,
  Button,
} from '@chakra-ui/react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const ShoppingCart = ({ card, setCard, userInfo }) => {
  const navigate = useNavigate();

  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const sum = card.reduce((partialSum, el) => {
      const tmp = el.price * el.count;
      return partialSum + tmp;
    }, 0);

    setTotalSum(sum);
  }, [card]);

  const orderSubmit = () => {
    let orderInfo = '';
    for (const prod of card) {
      orderInfo += `${prod.name} (${prod.count}); `;
    }
    console.log(orderInfo, totalSum, userInfo.name, userInfo.phone)
    axios.post('http://localhost:8080/api/orders', { 
      user: userInfo.name,
      phone: userInfo.phone,
      info: orderInfo,
      sum: totalSum,
    })
      .then((res) => {
        setCard([]);
        navigate('/');
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {card.length > 0 ? 
        <Box>
          <Text as='h1' fontSize='3xl'>Список добавленных товаров:</Text>
          <Text mb='50px'>Сумма заказа {totalSum}₽</Text>
          
          <Flex align="center" direction="column">
            {card.map(item => 
              <SmallCard
                key={"cart-item" + item.id}
                data={item}
                setCard={setCard}
              />
            )}
          </Flex>

          <Button 
            background='tomato' 
            variant='solid'
            onClick={ orderSubmit }
            >Оформить заказ</Button>
        </Box> : 
        <Text>Ваша корзина пуста</Text>
      }
      
    </>
  );
};

export default ShoppingCart;