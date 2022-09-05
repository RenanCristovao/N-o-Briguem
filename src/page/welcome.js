import {  Text, Flex, Button, theme} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'


import { Link } from 'react-router-dom'


function Welcome () {
  return (
    
   
    <Flex h='100vh' w='100%' bgGradient='linear(to-br, #FF4343, #810000)' justify={'center'} align='center' >

      <Flex color='white' direction='column'>
        <Text fontSize='64px' as='b' lineHeight='0.2' >
          Bem vindo ao
        </Text>
        <Text fontSize='96px' as='b'>
          Não Briguem
        </Text>
        <Link to='/NaoBriguem' >
          <Button colorScheme='whiteAlpha' variant='solid' size='lg' w='200px' fontSize='24px' rightIcon={<ArrowForwardIcon />}>
            Entrar 
          </Button>
        </Link>
      </Flex>
      
    </Flex>
    
   
  );
}

export default Welcome;