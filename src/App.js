import { Box, Text, Flex, Spacer, Center, Square,} from '@chakra-ui/react'

function App() {
  return (
    
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
   
  );
}

export default App;
