import { Link } from "react-router-dom";
import { 
  Box, 
  Image, 
  Text, 
  Button,
  Flex,
  Spacer
} from '@chakra-ui/react';

const SmallCard = ({ data, setCard }) => {
  const { name, id, image, price, count } = data;

  const updateCart = () => {
    setCard(previous => {
      const newData = previous.filter(item => item.id != id);
      return newData;
    });
  }

  return (    
    <Box maxW='400px' borderWidth='1px' borderRadius='lg' overflow='hidden' mb='15px'>
      <Link to={`/product/${id}`}>
        <Image src={image} alt={"text"} />
  
        <Box p='2'>
          <Text fontWeight='bold' fontSize='2xl'>{name}</Text>
        </Box>
      </Link>
  
      <Flex fontSize='20px' mx='10px' my='15px' align='center'>
        {count} * {price}₽ = {count * price}
        <Box as='span' color='gray.600' fontSize='lg'>
          ₽
        </Box>
        <Spacer />
        <Button background='tomato' variant='solid' onClick={() => updateCart()}>
          Удалить
        </Button>
      </Flex>
  
    </Box>)
}

export default SmallCard;