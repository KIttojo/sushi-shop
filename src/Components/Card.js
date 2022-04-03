import { Link } from "react-router-dom";
import { 
  Box, 
  Image, 
  Badge, 
  Text, 
  Button,
  Flex,
  Spacer
} from '@chakra-ui/react';

const Card = ({ data }) => {
  const { id, name, status, composition, image, price } = data;

  return (
    <Box maxW='520px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={image} alt={name} />

      <Box p='2'>
        <Box display='flex' alignItems='baseline' my='7px'>
          {status && <Badge borderRadius='7px' px='2' color='white' bg='red.500'>
            Новинка
          </Badge>}
        </Box>

        <Text fontWeight='bold' fontSize='2xl'>{name}</Text>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={3}
        >
          {composition}
        </Box>
      </Box>

      <Flex fontSize='20px' mx='10px' my='15px' align='center'>
        {price}
        <Box as='span' color='gray.600' fontSize='lg'>
          ₽
        </Box>
        <Spacer />
        <Link to={`/product/${id}`}>
          <Button background='tomato' variant='solid'>
            К товару
          </Button>
        </Link>
      </Flex>

    </Box>
  )
}

export default Card;