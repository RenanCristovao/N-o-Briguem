import { Flex, Text, Box, Button} from '@chakra-ui/react'



function NaoBriguem() {
  return (

    <Flex h='100vh' w='100vw' bgGradient='linear(to-br, #FF4343, #810000)' justify='center' align='center' >
      
      <Flex color='white' direction='column' align='center' >
        <Text fontSize='64px' as='b' >
          Vocês estão a
        </Text>
        <Flex >
          <Box fontSize='32px' textAlign='center' margin='0 13px' >
            <Box bg='white'  borderRadius='100%' p='7' w='150px' h='150px'  boxShadow='10px 5px 4px rgba(0, 0, 0, 0.25)' >
              <Text color='#B22020' fontSize='64px' as='b'  >
                15
              </Text>
            </Box>
              Dias
          </Box> 
          <Box fontSize='32px' textAlign='center' margin='0 13px'>
            <Box bg='white'  borderRadius='100%' p='7' w='150px' h='150px'  boxShadow='10px 5px 4px rgba(0, 0, 0, 0.25)' >
              <Text color='#B22020' fontSize='64px' as='b'  >
                20
              </Text>
            </Box>
              Horas
          </Box> 
          <Box fontSize='32px' textAlign='center' margin='0 13px'>
            <Box bg='white'  borderRadius='100%' p='7' w='150px' h='150px'  boxShadow='10px 5px 4px rgba(0, 0, 0, 0.25)' >
              <Text color='#B22020' fontSize='64px' as='b'  >
               45
              </Text>
            </Box>
              Minutos
          </Box> 
          <Box fontSize='32px' textAlign='center' margin='0 13px'>
            <Box bg='white'  borderRadius='100%' p='7' w='150px' h='150px'  boxShadow='10px 5px 4px rgba(0, 0, 0, 0.25)' >
              <Text color='#B22020' fontSize='64px' as='b' justifySelf={'center'} >
                12
              </Text>
            </Box>
              Segundos
          </Box> 
         
        </Flex>
        <Text fontSize='64px' as='b' align='center' >
          Sem Brigar
        </Text>
        <Button color='#B22020' >Zerar Contador</Button>
      </Flex>
    </Flex>
   
  );
}

export default NaoBriguem;
