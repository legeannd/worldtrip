import { Box, Flex, HStack, Icon, Text, Tooltip, VStack } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { Header } from '../components/Header';

export default function Continent() {

  return (
    <Box>
      <Header />

      <Flex
        align="flex-end"
        justify="center"
        backgroundImage="/bigben.png"
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
        mt="4rem"
        w="100%"
        justify="center"
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
                <Text color="dark.headings" fontWeight="600" fontSize="24">
                  cidades +100 
                  <Tooltip label="Número de cidades entre as 100 mais visitadas do mundo" aria-label="Cidades +100"><Icon as={FiInfo} color="dark.info"/></Tooltip>
                </Text>
              </VStack>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}
