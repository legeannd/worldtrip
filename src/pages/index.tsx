import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { SwiperComponent } from "../components/SwiperComponent";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Box
      mb="2rem"
    >
      <Header />

      <Flex
        wrap="wrap"
        align="center"
        justify="center"
      >
        <Banner />
        <TravelTypes />
        <Flex
          w="100%"
          align="center"
          justify="center"
          my="4rem"
        >
          <Box
            h="2px"
            w="90px"
            backgroundColor="dark.headings"
          />
        </Flex>
        <VStack
          align="center"
          justify="center"
          spacing="2"
          fontWeight="500"
          fontSize="36"
          color="dark.headings"
          mb="1rem"
          w="100%"
        >
          <Text>
            Vamos nessa?
          </Text>
          <Text>
            Então escolha seu continente
          </Text>
        </VStack>
        <SwiperComponent />
      </Flex>
    </Box>
  )
}
