import { Flex, VStack, Img, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100vw"
      align="center"
      justify="center"
      backgroundImage="url('/background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        maxW="1440px"
        justify="space-between"
        align="center"
        w="100%"
        px="5"
        position="relative"
      >
        <VStack
          spacing="4"
          my="4rem"
          align="left"
        >
          <Text
            fontSize={isWideVersion ? "36" : "20"}
            fontWeight="500"
            color="light.headings"
            maxW="600px"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            fontSize={isWideVersion ? "20" : "14"}
            fontWeight="400"
            color="light.info"
            maxW="600px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>

        {isWideVersion && (
          <Img
            src="/airplane.svg"
            h="16rem"
            position="absolute"
            bottom="-10"
            right="0"
          />
        )}
      </Flex>
    </Flex>
  );
}