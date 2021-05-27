import { Flex, Icon, Img, Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from 'next/router';
import Link from "next/link";

export function Header() {
  const { asPath } = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  });

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
              <Icon as={FiChevronLeft} fontSize={isWideVersion ? "32" : "16"} color="dark.headings"/>
            </ChakraLink>
          </Link>
          <Img src="/logo.svg" w="auto" h={isWideVersion ? "auto" : "30px"}/>
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
        <Img src="/logo.svg" h={isWideVersion ? "auto" : "30px"} />
      </Flex>
    );
  }
}