import {
  useNumberInput,
  HStack,
  Button,
  Input
} from '@chakra-ui/react';
import { useEffect } from 'react';

const PageCounter = ({ setCount }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 15,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps({ isReadOnly: true })

  useEffect(() => {
    setCount(input.value++);
  }, [input])

  return (
    <HStack maxW='200px' mr='20px'>
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  )
}

export default PageCounter;