import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Link,
  Image,
  Text,
  Tag,
  useColorModeValue,
  Container,
  Button,
  OrderedList,
  ListItem,
  useMediaQuery
} from '@chakra-ui/react';
import PageCounter from './Components/PageCounter';
import data from './api/data';

import { useDispatch } from 'react-redux';

const ProductPage = ({ setCard }) => {
  const { productId } = useParams();

  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const [product, setProduct] = useState(...data.data.filter(elem => elem.id == productId));
  const [count, setCount] = useState(1);

  const { name, status, composition, image, price } = product;
  const compositionList = composition.split(', ');

  const dispatch = useDispatch();

  const addProductToCard = () => {
    const data = {
      name: name,
      id: productId,
      price: price,
      count: count,
      image: image
    };

    dispatch({
      type: 'ADD_CASH',
      payload: 5
    });

    // setCard(prevState => {
    //   if (prevState.length === 0) return [data];

    //   const items = prevState;

    //   if (!items.some(i => i.id == data.id)) items.push(data);
    //   const products = items.map(item => item.id != data.id ? item : data);

    //   return [
    //     ...products
    //   ]
    // });
  }

  return (
    <Container maxW={'1000'} p="10">
      <Box
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={image}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          {status && 
            <Tag size={'md'} variant="solid" colorScheme="orange" maxW='40px'>
              {status}
            </Tag>
          }
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {name}
            </Link>
          </Heading>

        </Box>
      </Box>
      
      <Flex
        mt='40px'
        justify='space-between' 
        direction={isLargerThan700 ? 'row-reverse' : 'column'}
      >
        <Flex align='center' direction="column">
          <Flex fontSize='20px' mx='10px' my='15px' align='center'>
            {price * count}
            <Box as='span' color='gray.600' fontSize='lg'>
              ₽
            </Box>
          </Flex>
          <Flex>
            <PageCounter setCount={setCount}/>
            <Button 
              background='tomato' 
              variant='solid'
              onClick={() => addProductToCard()}
            >
              В корзину
            </Button>
          </Flex>
        </Flex>

        <Box>
          <Text 
          align='start' 
          fontSize='2xl'
          mb='20px'
          >
            Состав:
          </Text>

          <OrderedList align='start'>
            {compositionList.map((item, elid) => <ListItem key={`list-${elid}`}>{item}</ListItem>)}
          </OrderedList>
        </Box>
      </Flex>
    </Container>
  );
};

export default ProductPage;