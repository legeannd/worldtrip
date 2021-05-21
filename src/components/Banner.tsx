import { Flex, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      h="8rem"
      w="100%"
      bg="blue.500"
    >
      <Text>
        5 Continentes,
        infinitas possibilidades.
      </Text>
    </Flex>
  );
}