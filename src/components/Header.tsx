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
          justify="space-between"
          w="100%"
          maxW="1440px"
          mx="2"
        >
          <Link href="/">
            <ChakraLink as="a">
              <Icon as={FiChevronLeft} fontSize="32" />
            </ChakraLink>
          </Link>
          <Img src="/logo.svg" />
          <Box background="transparent" />
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