import {  Text, Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function Page1() {
  return (
    
   
    <Flex h='100vh' w='100vw' bgGradient='linear(to-br, #FF4343, #810000)' justify={'center'} align='center' >

      <Flex color='white' direction='column'>
        <Text fontSize='64px' as='b' lineHeight='0.2' >
          Bem vindo ao
        </Text>
        <Text fontSize='96px' as='b'>
          Não Briguem
        </Text>
        <Link to='/NaoBriguem' >
          <Button colorScheme='whiteAlpha' variant='outline' size='lg' w='200px' fontSize='24px' color>
            Entrar
          </Button>
        </Link>
      </Flex>
      
    </Flex>
    
   
  );
}

export default Page1;