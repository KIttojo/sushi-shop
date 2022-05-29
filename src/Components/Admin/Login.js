import {useState} from 'react';
import { useNavigate } from "react-router-dom";
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
import axios from 'axios';

export default function SimpleCard({setUserInfo}) {
  const [formData, setFormData] = useState({email: '', password: ''});
  let navigate = useNavigate();

  const handleInput = (type, val) => {
    setFormData(prev => {
      return {
        ...prev,
        [type]: val,
      };
    });
  };
  
  const logIn = () => {
    axios.post('https://sushi-shopp.herokuapp.com/api/authenticate', { ...formData })
      .then((res) => {
        setUserInfo({ ...res.data.user })
        navigate('/admin/dashboard')
      })
      .catch((err) => console.log(err))
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
              <Input type="password" onChange={(e) => handleInput('password', e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={ logIn }
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