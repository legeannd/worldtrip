import { Flex, Img, Text, VStack } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex
      maxW="1440px"
      w="100%"
      mt="6rem"
      mb="4rem"
      justify="space-between"
    >
      <VStack
        w="200px"
      >
        <Img 
          src="/icons/cocktail.svg"
          w="85px"
          h="85px"
        />
        <Text
          fontWeight="600"
          fontSize="24"
          color="dark.headings"
        >
          vida noturna
        </Text>
      </VStack>

      <VStack
        w="200px"
      >
        <Img 
          src="/icons/surf.svg"
          w="85px"
          h="85px"
        />
        <Text
          fontWeight="600"
          fontSize="24"
          color="dark.headings"
        >
          praia
        </Text>
      </VStack>

      <VStack
        w="200px"
      >
        <Img 
          src="/icons/building.svg"
          w="85px"
          h="85px"
        />
        <Text
          fontWeight="600"
          fontSize="24"
          color="dark.headings"
        >
          moderno
        </Text>
      </VStack>

      <VStack
        w="200px"
      >
        <Img 
          src="/icons/museum.svg"
          w="85px"
          h="85px"
        />
        <Text
          fontWeight="600"
          fontSize="24"
          color="dark.headings"
        >
          clássico
        </Text>
      </VStack>

      <VStack
        w="200px"
      >
        <Img 
          src="/icons/earth.svg"
          w="85px"
          h="85px"
        />
        <Text
          fontWeight="600"
          fontSize="24"
          color="dark.headings"
        >
          e mais...
        </Text>
      </VStack>
    </Flex>
  );
}