import { Text, Flex, Button, theme } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

function Welcome() {
  return (
    <Flex
      h="100vh"
      w="100%"
      bgGradient="linear(to-br, #FF4343, #810000)"
      justify={"center"}
      align="center"
    >
      <Flex color="white" direction="column">
        <Text
          fontSize={{ base: "16px", sm: "32px", md: "64px" }}
          as="b"
          lineHeight="0.2"
        >
          Bem vindo ao
        </Text>
        <Text fontSize={{ base: "24px", sm: "48px", md: "96px" }} as="b">
          Não Briguem
        </Text>
        <Link to="/NaoBriguem">
          <Button
            colorScheme="gray"
            variant="ghost"
            size="lg"
            fontSize={{ base: "12px", sm: "24px", md: "24px" }}
            rightIcon={<ArrowForwardIcon />}
          >
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Welcome;
