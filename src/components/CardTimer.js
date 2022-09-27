import { Box, Text } from "@chakra-ui/react";

function CardTimer(props) {
  const value = props.value;

  return (
    <Box
      fontSize={{ base: "8px", sm: "24px", md: "32px" }}
      textAlign="center"
      margin="0 13px"
    >
      <Box
        bg="white"
        borderRadius="100%"
        p={{ base: "0", sm: "2", md: "7" }}
        w={{ base: "50px", sm: "75px", md: "150px" }}
        h={{ base: "50px", sm: "75px", md: "150px" }}
        boxShadow="10px 5px 4px rgba(0, 0, 0, 0.25)"
      >
        <Text
          color="#B22020"
          fontSize={{ base: "32px", sm: "36px", md: "64px" }}
          as="b"
        >
          {value}
        </Text>
      </Box>
      {props.label}
    </Box>
  );
}

export default CardTimer;
