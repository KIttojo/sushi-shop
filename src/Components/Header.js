import {
  Center, 
  Avatar, 
  Spacer,
  Flex,
  Icon,
  Text
} from '@chakra-ui/react';
import { MdReceipt } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { ReactComponent  as SushiIcon } from '../icons/sushi-logo.svg';
import UserModal from './UserForm';
import { useState } from 'react';

const Header = ({ userInfo, card, isOpen, onOpen, onClose, setUserInfo }) => {
  const [notAuth, setNotAuth] = useState(true);

  return (
    <Center bg='tomato' h='100px' mb='50px'>
      <UserModal
        isOpen={notAuth || isOpen}
        onClose ={onClose}
        setUserInfo={setUserInfo}
        setNotAuth={setNotAuth}
      />

      <Center w='100%' maxW='900px' mx='30px' color='white'>
        <Link to='/'>
         <SushiIcon width='50px'/>
        </Link>

        <Spacer/>
        <Flex align='center'>
          <Link to='/cart'>
            <Icon as={MdReceipt} w={6} h={6} mr='5px'/>
          </Link>
          
          <Text mr='20px'>{card.length}</Text>
          <Avatar
            onClick={onOpen}
            name={userInfo.name || 'Иван Иванов'}
            src='https://bit.ly/broken-link' 
            bg='red.500'
            cursor='pointer'
          />
        </Flex>
      </Center>
    </Center>
  );
};

export default Header;