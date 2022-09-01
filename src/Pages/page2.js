import { Flex, Text} from '@chakra-ui/react'

function Page2() {
  return (
    
    <Flex h='100vh' w='100vw' bgGradient='linear(to-br, #FF4343, #810000)' justify={'center'} align='center' >

      <Flex color='white' direction='column'>
        <Text fontSize='64px' as='b' >
          Pagina 2
        </Text>
      </Flex>
    </Flex>
   
  );
}

export default Page2;
