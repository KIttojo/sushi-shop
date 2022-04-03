import { useState } from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import Card from './Card';
import data from '../api/data';

const Products = () => {
  const [products, setProducts] = useState(data.data);

  return (
    <Flex align="center" direction="column">
      <SimpleGrid minChildWidth='190px' spacing='40px' mx='20px'>
        {products.map(item => <Card key={item.id} data={item}/>)}
      </SimpleGrid>
    </Flex>
  );
};

export default Products;