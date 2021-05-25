import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';

export default function Continent() {
  const router = useRouter();

  const { continent } = router.query;

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
    </Box>
  );
}
