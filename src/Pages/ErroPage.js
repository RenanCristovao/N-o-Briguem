import {  Text, Flex, } from '@chakra-ui/react'



function ErroPage() {
  return (
    
    
    <Flex h='100vh' w='100vw' bgGradient='linear(to-br, #FF4343, #810000)' justify={'center'} align='center' >

     
        <Text fontSize='96px' as='b' lineHeight='0.7'>
          Pagina não encontrada 404
        </Text>
      </Flex>
        
  );
}

export default ErroPage;