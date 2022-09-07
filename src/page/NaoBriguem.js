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
        <Text fontSize={{ base: "32px", md: "64px" }} as="b">
          Vocês estão a
        </Text>
        <Flex>
          <CardTimer value="9" label="Dias" />
          <CardTimer value="12" label="Horas" />
          <CardTimer value="22" label="Minutos" />
          <CardTimer value="10" label="Segundos" />
        </Flex>
        <Text fontSize={{ base: "32px", md: "64px" }} as="b" align="center">
          Sem Brigar
        </Text>
        <Button color="#B22020">Zerar Contador</Button>
      </Flex>
    </Flex>
  );
}

export default NaoBriguem;
