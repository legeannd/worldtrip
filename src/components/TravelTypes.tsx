import { Flex, Img, Text, VStack, useBreakpointValue, Box } from "@chakra-ui/react";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      maxW="1440px"
      w="100%"
      mt="6rem"
      justify={isWideVersion ? "space-between" : "space-around"}
      wrap={isWideVersion ? "nowrap" : "wrap"}
    >
      <VStack
        w="200px"
      >
        {isWideVersion && (
          <Img
            src="/icons/cocktail.svg"
            w="85px"
            h="85px"
          />
        )}

        <Text
          fontWeight="600"
          fontSize={isWideVersion ? "24" : "18"}
          color="dark.headings"
        >
          {!isWideVersion && (
            <Box
              w="8px"
              h="8px"
              background="yellow.400"
              borderRadius="50%"
              display="inline-block"
              mr="0.5rem"
            />
          )}
          vida noturna
        </Text>
      </VStack>

      <VStack
        w="200px"
      >
        {isWideVersion && (
          <Img
            src="/icons/surf.svg"
            w="85px"
            h="85px"
          />
        )}
        <Text
          fontWeight="600"
          fontSize={isWideVersion ? "24" : "18"}
          color="dark.headings"
        >
          {!isWideVersion && (
            <Box
              w="8px"
              h="8px"
              background="yellow.400"
              borderRadius="50%"
              display="inline-block"
              mr="0.5rem"
            />
          )}
          praia
        </Text>
      </VStack>

      <VStack
        w="200px"
      >
        {isWideVersion && (
          <Img
            src="/icons/building.svg"
            w="85px"
            h="85px"
          />
        )}

        <Text
          fontWeight="600"
          fontSize={isWideVersion ? "24" : "18"}
          color="dark.headings"
        >
          {!isWideVersion && (
            <Box
              w="8px"
              h="8px"
              background="yellow.400"
              borderRadius="50%"
              display="inline-block"
              mr="0.5rem"
            />
          )}
          moderno
        </Text>
      </VStack>

      <VStack
        w="200px"
      >
        {isWideVersion && (
          <Img
            src="/icons/museum.svg"
            w="85px"
            h="85px"
          />
        )}

        <Text
          fontWeight="600"
          fontSize={isWideVersion ? "24" : "18"}
          color="dark.headings"
        >
          {!isWideVersion && (
            <Box
              w="8px"
              h="8px"
              background="yellow.400"
              borderRadius="50%"
              display="inline-block"
              mr="0.5rem"
            />
          )}
          clássico
        </Text>
      </VStack>

      <VStack
        w="200px"
      >
        {isWideVersion && (
          <Img
            src="/icons/earth.svg"
            w="85px"
            h="85px"
          />
        )}

        <Text
          fontWeight="600"
          fontSize={isWideVersion ? "24" : "18"}
          color="dark.headings"
        >
          {!isWideVersion && (
            <Box
              w="8px"
              h="8px"
              background="yellow.400"
              borderRadius="50%"
              display="inline-block"
              mr="0.5rem"
            />
          )}
          e mais...
        </Text>
      </VStack>
    </Flex>
  );
}