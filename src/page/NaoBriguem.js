import { Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import CardTimer from "../components/CardTimer";

function NaoBriguem() {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [dias, setDias] = useState(0);
  let loop;

  function start() {
    Count();
  }

  function Count() {
    loop = setTimeout(() => {
      start();
      setSegundos(segundos + 1);
    }, 100);

    if (segundos === 59) {
      setSegundos(0);
      setMinutos(minutos + 1);
    }
    if (minutos === 59) {
      setMinutos(0);
      setHoras(horas + 1);
    }
    if (horas === 23) {
      setHoras(0);
      setDias(dias + 1);
    }
    console.log(segundos);
  }

  function Zerar() {
    setDias(0);
    setMinutos(0);
    setSegundos(0);
    setHoras(0);

    clearInterval(loop);
  }

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
          <CardTimer value={dias} label="Dias" />
          <CardTimer value={horas} label="Horas" />
          <CardTimer value={minutos} label="Minutos" />
          <CardTimer value={segundos} label="Segundos" />
        </Flex>
        <Text fontSize={{ base: "32px", md: "64px" }} as="b" align="center">
          Sem Brigar
        </Text>
        <Flex>
          <Button onClick={start} color="#B22020" m="0 25px">
            Começar
          </Button>
          <Button onClick={Zerar} color="#B22020" m="0 25px">
            Zerar Contador
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NaoBriguem;
