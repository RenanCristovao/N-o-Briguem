import {  Text, Flex, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function Page1() {
  return (
    
    <Link to='/Page2' >
    <Flex h='100vh' w='100vw' bgGradient='linear(to-br, #FF4343, #810000)' justify={'center'} align='center' >

      <Flex color='white' direction='column'>
        <Text fontSize='64px' as='b' >
          Bem vindo ao
        </Text>
        <Text fontSize='96px' as='b' lineHeight='0.7'>
          Não Briguem
        </Text>
      </Flex>
     
    </Flex>
    </Link>
   
  );
}

export default Page1;