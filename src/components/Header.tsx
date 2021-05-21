import { Flex, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      py="4"
    >
      <Img src="/logo.svg"/>
    </Flex>
  );
}