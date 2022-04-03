import { 
  Box, 
  Text, 
  Flex,
} from '@chakra-ui/react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';

const ShoppingCart = ({ card, setCard }) => {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const sum = card.reduce((partialSum, el) => {
      const tmp = el.price * el.count;
      return partialSum + tmp;
    }, 0);

    setTotalSum(sum);
  }, [card]);

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
        </Box> : 
        <Text>Ваша корзина пуста</Text>
      }
      
    </>
  );
};

export default ShoppingCart;