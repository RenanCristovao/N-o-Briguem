import { Flex, Text, Box, Button } from "@chakra-ui/react";
import CardTimer from "../components/CardTimer";

function NaoBriguem() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      bgGradient="linear(to-br, #FF4343, #810000)"
      justify="center"
      align="center"
    >
      <Flex color="white" direction="column" align="center">
        <Text fontSize="64px" as="b">
          Vocês estão a
        </Text>

        <CardTimer />

        <Text fontSize="64px" as="b" align="center">
          Sem Brigar
        </Text>
        <Button color="#B22020">Zerar Contador</Button>
      </Flex>
    </Flex>
  );
}

export default NaoBriguem;
