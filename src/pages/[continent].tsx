import { Box, Flex, HStack, Icon, Text, Tooltip, VStack, useBreakpointValue, Stack } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { CityCard } from '../components/CityCard';
import { Header } from '../components/Header';

export default function Continent() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex
        align={isWideVersion ? "flex-end" : "center"}
        justify="center"
        backgroundImage="bigben.png"
        backgroundPosition="center"
        backgroundSize="cover"
        w="auto"
        h={isWideVersion ? "500px" : "250px"}
      >
        <Text
          w="100%"
          maxW="1440px"
          textAlign={isWideVersion ? "left" : "center"}
          color="light.headings"
          fontWeight="600"
          fontSize={isWideVersion ? "48" : "28"}
          pl="2rem"
          mb="2rem"
        >
          Europa
        </Text>
      </Flex>
      <Flex
        my="4rem"
        px="2rem"
        w="100%"
        justify="center"
        wrap="wrap"
      >
        <Flex
          justify="center"
          w="100%"
          maxW="1440px"
        >
          <Stack
            direction={["column", "column", "row"]}
            w="100%"
          >
            <Text as="p" w={isWideVersion ? "50%" : "100%"} color="dark.headings" fontSize={isWideVersion ? "24" : "14"} textAlign="justify">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
            </Text>

            <Flex
              w={isWideVersion ? "50%" : "100%"}
              h={isWideVersion ? "100%" : "auto"}
              align="center"
              justify="space-between"
              pl={isWideVersion ? "4rem" : "0"}
              pt={["2rem", "2rem", "0"]}
            >
              <VStack>
                <Text color="yellow.400" fontWeight="600" fontSize={isWideVersion ? "48" : "24"} lineHeight="0.5">
                  50
                </Text>
                <Text color="dark.headings" fontWeight={isWideVersion ? "600" : "400"} fontSize={isWideVersion ? "24" : "18"}>
                  países
                </Text>
              </VStack>

              <VStack>
                <Text color="yellow.400" fontWeight="600" fontSize={isWideVersion ? "48" : "24"} lineHeight="0.5">
                  60
                </Text>
                <Text color="dark.headings" fontWeight={isWideVersion ? "600" : "400"} fontSize={isWideVersion ? "24" : "18"}>
                  línguas
                </Text>
              </VStack>

              <VStack>
                <Text color="yellow.400" fontWeight="600" fontSize={isWideVersion ? "48" : "24"} lineHeight="0.5">
                  27
                </Text>
                <Tooltip
                  label="Cidades entre as 100 mais visitadas do mundo"
                  aria-label="Cidades +100"
                  fontSize="12"
                >
                  <HStack
                    spacing="2"
                    wrap="wrap"
                  >
                    <Text color="dark.headings" fontWeight={isWideVersion ? "600" : "400"} fontSize={isWideVersion ? "24" : "18"}>
                      cidades +100
                    </Text>
                    <Icon as={FiInfo} color="dark.info" />
                  </HStack>
                </Tooltip>
              </VStack>
            </Flex>
          </Stack>
        </Flex>
        <Flex
          align="center"
          justify="center"
          w="100%"
        >
          <Flex
            w="100%"
            maxW="1440px"
            justify="center"
            mt={["2rem", "2rem", "5rem"]}
            wrap="wrap"
          >
            <Text
              fontWeight="400"
              fontSize="36"
              color="dark.headings"
              alignSelf="flex-start"
              w="100%"
              mb="2.5rem"
            >
              Cidades +100
        </Text>
            <Flex
              w="100%"
              wrap="wrap"
            >
              <Stack
                w="100%"
                justify={isWideVersion ? "space-between" : "center"}
                align="center"
                spacing="2rem"
                direction={isWideVersion ? "row" : "column"}
                wrap="wrap"
              >
                <CityCard cityName="Londres" countryName="Reino Unido" cityImage="cards/london.png" flagImage="cards/uk-flag.png" />
                <CityCard cityName="Paris" countryName="França" cityImage="cards/paris.png" flagImage="cards/fr-flag.png" />
                <CityCard cityName="Roma" countryName="Itália" cityImage="cards/rome.png" flagImage="cards/it-flag.png" />
                <CityCard cityName="Praga" countryName="República Tcheca" cityImage="cards/plague.png" flagImage="cards/tc-flag.png" />
                <CityCard cityName="Amsterdã" countryName="Holanda" cityImage="cards/amsterdan.png" flagImage="cards/hl-flag.png" />
              </Stack>
            </Flex>
          </Flex>
        </Flex>

      </Flex>

    </Box>
  );
}
