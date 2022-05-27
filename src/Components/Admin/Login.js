import {useState} from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SimpleCard({setUserInfo}) {
  const [formData, setFormData] = useState({email: '', pass: ''});

  const handleInput = (type, val) => {
    setFormData(prev => {
      return {
        ...prev,
        [type]: val,
      };
    });
  };
  
  const logIn = () => {
    //axios.post via email and pass from formData
    //if successfully, then save user by calling:
    // .then(res => setUserInfo(res))
  }

  return (
    <Flex
      minH={'75vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Войти в админ панель</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email адрес</FormLabel>
              <Input type="email" onChange={(e) => handleInput('email', e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Пароль</FormLabel>
              <Input type="password" onChange={(e) => handleInput('pass', e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'tomato'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Вход
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}