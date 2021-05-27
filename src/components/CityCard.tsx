import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react"

interface CityCardProps {
  cityName: string;
  countryName: string;
  cityImage: string;
  flagImage: string;
}

export function CityCard({
  cityImage,
  flagImage,
  cityName,
  countryName
}: CityCardProps) {
  return (
    <Box
      border="1px solid"
      borderColor="rgba(255, 186, 8, 0.5)"
      borderRadius="4px"
      maxW={["250px", "300px", "25%"]}
    >
      <Img src={cityImage} w="100%" h="auto" />
      <Flex
        align="center"
        justify="space-between"
        px="1rem"
        my="1rem"
      >
        <VStack
          justify="left"
        >
          <Text
            fontWeight="600"
            fontSize="20"
            color="dark.headings"
            w="100%"
          >
            {cityName}
          </Text>
          <Text
            w="100%"
            fontWeight="500"
            fontSize="16"
            color="dark.info"
          >
            {countryName}
          </Text>
        </VStack>
        <Img src={flagImage} w="30px" h="30px" />
      </Flex>
    </Box>
  );
}