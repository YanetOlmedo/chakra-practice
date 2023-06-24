import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Flex } from "@chakra-ui/react";
import Btn from "./Btn";

function Header() {
  return (
    <Card m={20} align="center" backgroundImage="url('/bicycle-sunset.jpg')" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center 63%" style={{ filter: "brightness(0.8)" }} borderRadius={2}>
      <CardBody>
        <Text color="whitesmoke" fontSize={{ base: "2xl", md: "30px" }} letterSpacing="0.1em" textAlign={{ base: "center", md: "left" }} whiteSpace="nowrap" mt={8}>
          DOMINA EL TERRENO
        </Text>
      </CardBody>
      <CardFooter>
        <Flex wrap={"wrap"} align="center" justify="center" textAlign="center" mt={-8} mb={8}>
          <Btn>VER DETALLES</Btn>
          <Btn>VER VIDEO</Btn>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default Header;
