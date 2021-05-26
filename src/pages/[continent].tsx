import { Box, Flex, HStack, Icon, Img, Text, Tooltip, VStack } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { CityCard } from '../components/CityCard';
import { Header } from '../components/Header';

export default function Continent() {

  return (
    <Box>
      <Header />

      <Flex
        align="flex-end"
        justify="center"
        backgroundImage="bigben.png"
        backgroundPosition="center"
        backgroundSize="cover"
        w="auto"
        h="500px"
      >
        <Text
          w="100%"
          maxW="1440px"
          color="light.headings"
          fontWeight="600"
          fontSize="48"
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
          <HStack
            w="100%"
          >
            <Text as="p" w="50%" color="dark.headings" fontSize="24" textAlign="justify">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
            </Text>

            <Flex
              w="50%"
              h="100%"
              align="center"
              justify="space-between"
              pl="4rem"
            >
              <VStack>
                <Text color="yellow.400" fontWeight="600" fontSize="48" lineHeight="0.5">
                  50
                </Text>
                <Text color="dark.headings" fontWeight="600" fontSize="24">
                  países
                </Text>
              </VStack>

              <VStack>
                <Text color="yellow.400" fontWeight="600" fontSize="48" lineHeight="0.5">
                  60
                </Text>
                <Text color="dark.headings" fontWeight="600" fontSize="24">
                  línguas
                </Text>
              </VStack>

              <VStack>
                <Text color="yellow.400" fontWeight="600" fontSize="48" lineHeight="0.5">
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
                    <Text color="dark.headings" fontWeight="600" fontSize="24">
                      cidades +100
                    </Text>
                    <Icon as={FiInfo} color="dark.info" />
                  </HStack>
                </Tooltip>
              </VStack>
            </Flex>
          </HStack>
        </Flex>
        <Flex
          w="100%"
          maxW="1440px"
          justify="center"
          mt="5rem"
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
            <HStack
              w="100%"
              justify="space-between"
              spacing="2rem"
              wrap="wrap"
            >
              <CityCard cityName="Londres" countryName="Reino Unido" cityImage="cards/london.png" flagImage="cards/uk-flag.png" />
              <CityCard cityName="Paris" countryName="França" cityImage="cards/paris.png" flagImage="cards/fr-flag.png" />
              <CityCard cityName="Roma" countryName="Itália" cityImage="cards/rome.png" flagImage="cards/it-flag.png" />
              <CityCard cityName="Praga" countryName="República Tcheca" cityImage="cards/plague.png" flagImage="cards/tc-flag.png" />
              <CityCard cityName="Amsterdã" countryName="Holanda" cityImage="cards/amsterdan.png" flagImage="cards/hl-flag.png" />
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
