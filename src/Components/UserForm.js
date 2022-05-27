import { 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const UserModal = ({ isOpen, onClose, setNotAuth }) => {
  const [tmpUser, setTmpUser] = useState({name: '', phone: ''});
  const initialRef = useRef();
  const finalRef = useRef();

  const dispatch = useDispatch();

  const handleChange = (type, value) => {
    setTmpUser(previous => {
      const newUser = {...previous};
      newUser[type] = value;
      return newUser;
    })
  }

  const submitUser = () => {
    if (tmpUser.name && tmpUser.phone) {
      dispatch({
        type: 'SET_USER',
        payload: tmpUser
      })
      setNotAuth(false);
    }
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Регистрация</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Полное имя</FormLabel>
              <Input 
                ref={initialRef} 
                placeholder='Иван Иванов'
                value={tmpUser.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Номер телефона</FormLabel>
              <Input 
                placeholder='89000000000'
                value={tmpUser.phone}
                onChange={(e) => handleChange('phone', e.target.value)} 
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button background='tomato' mr={3} onClick={() => submitUser()}>
              Сохранить
            </Button>
            <Button onClick={onClose}>Отмена</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UserModal;