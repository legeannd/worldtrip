import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Box>
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
        >
          <Box
            h="2px"
            w="90px"
            backgroundColor="dark.headings"
          />
          
        </Flex>
      </Flex>
    </Box>
  )
}
