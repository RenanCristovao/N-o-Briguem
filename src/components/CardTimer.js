import { Box, Text, Flex } from "@chakra-ui/react";

function CardTimer(props) {
  return (
    <Box
      fontSize={{ base: "18px", md: "32px" }}
      textAlign="center"
      margin="0 13px"
    >
      <Box
        bg="white"
        borderRadius="100%"
        p={{ base: "1", md: "7" }}
        w={{ base: "75px", md: "150px" }}
        h={{ base: "75px", md: "150px" }}
        boxShadow="10px 5px 4px rgba(0, 0, 0, 0.25)"
      >
        <Text color="#B22020" fontSize={{ base: "44px", md: "64px" }} as="b">
          {props.value}
        </Text>
      </Box>
      {props.label}
    </Box>
  );
}

export default CardTimer;
