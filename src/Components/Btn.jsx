import { Button } from "@chakra-ui/react";

function Btn({ children }) {
  return (
    <Button
      m={2}
      w={{ base: "60vw", md: "auto" }}
      colorScheme="transparent"
      color="whitesmoke"
      _hover={{
        background: "whitesmoke",
        color: "black",
      }}
      border="1px solid whitesmoke"
      borderRadius={2}
    >
      {children}
    </Button>
  );
}

export default Btn;
