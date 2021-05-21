import { Flex, VStack, Img, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      h="10rem"
      w="100%"
      bg="blue.500"
      align="center"
    >
      <Flex
        px="5rem"
        justify="space-between"
        align="center"
        w="100%"
      >
        <VStack spacing="4">
          <Text>
            5 Continentes,
            infinitas possibilidades.
        </Text>
          <Text>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
        </VStack>

        <Img src="/airplane.svg" h="6rem" />
      </Flex>
    </Flex>
  );
}