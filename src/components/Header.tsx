import { Box, Flex, Icon, Img, Link as ChakraLink } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from 'next/router';
import Link from "next/link";

export function Header() {
  const { asPath } = useRouter();

  if (asPath !== "/") {
    return (
      <Flex
        as="header"
        py="4"
        align="center"
        justify="center"
      >
        <Flex
          align="center"
          justify="center"
          w="100%"
          maxW="1440px"
          mx="2"
          position="relative"
        >
          <Link href="/">
            <ChakraLink 
              as="a"
              position="absolute"
              left="0"
            >
              <Icon as={FiChevronLeft} fontSize="32" />
            </ChakraLink>
          </Link>
          <Img 
            src="/logo.svg" 
          
          />
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Flex
        as="header"
        py="4"
        align="center"
        justify="center"
      >
        <Img src="/logo.svg" />
      </Flex>
    );
  }
}