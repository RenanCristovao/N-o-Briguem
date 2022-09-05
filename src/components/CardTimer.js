import { Box, Text, Flex } from "@chakra-ui/react";

function CardTimer(text) {
  return (
    <Flex>
      <Box fontSize="32px" textAlign="center" margin="0 13px">
        <Box
          bg="white"
          borderRadius="100%"
          p="7"
          w="150px"
          h="150px"
          boxShadow="10px 5px 4px rgba(0, 0, 0, 0.25)"
        >
          <Text color="#B22020" fontSize="64px" as="b">
            15
          </Text>
        </Box>
        Dias
      </Box>
      <Box fontSize="32px" textAlign="center" margin="0 13px">
        <Box
          bg="white"
          borderRadius="100%"
          p="7"
          w="150px"
          h="150px"
          boxShadow="10px 5px 4px rgba(0, 0, 0, 0.25)"
        >
          <Text color="#B22020" fontSize="64px" as="b">
            20
          </Text>
        </Box>
        Horas
      </Box>
      <Box fontSize="32px" textAlign="center" margin="0 13px">
        <Box
          bg="white"
          borderRadius="100%"
          p="7"
          w="150px"
          h="150px"
          boxShadow="10px 5px 4px rgba(0, 0, 0, 0.25)"
        >
          <Text color="#B22020" fontSize="64px" as="b">
            45
          </Text>
        </Box>
        Minutos
      </Box>
      <Box fontSize="32px" textAlign="center" margin="0 13px">
        <Box
          bg="white"
          borderRadius="100%"
          p="7"
          w="150px"
          h="150px"
          boxShadow="10px 5px 4px rgba(0, 0, 0, 0.25)"
        >
          <Text color="#B22020" fontSize="64px" as="b" justifySelf={"center"}>
            12
          </Text>
        </Box>
        Segundos
      </Box>
    </Flex>
  );
}

export default CardTimer;
