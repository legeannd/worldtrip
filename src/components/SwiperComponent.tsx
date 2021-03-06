import { Flex, Link as ChakraLink, Img, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import Link from 'next/link';

SwiperCore.use([Pagination, Navigation]);

export const SwiperComponent = () => {
  const isWideVersion = useBreakpointValue({
    base: false, 
    md: true,
  });
  
  return (
    <Flex
      w="100%"
      maxW="1440px"
      maxH={isWideVersion ? "450px" : "250px"}
      position="relative"
    >
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          "watchState": true
        }}
        pagination={{
          "clickable": true
        }}
        navigation={true}
      >
        <SwiperSlide data-hash="europe">
          <Link href="/europe">
            <ChakraLink as="a">
              <Img src="/europe.png" w={isWideVersion ? "100%" : "auto"} h={isWideVersion ? "auto" : "100%"} />
              <VStack
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                <Text fontSize={isWideVersion ? "48" : "24"} fontWeight="600" color="light.headings">
                  Europa
            </Text>
                <Text fontSize={isWideVersion ? "24" : "14"} fontWeight="600" color="light.info">
                  O continente mais antigo.
            </Text>
              </VStack>
            </ChakraLink>
          </Link>
        </SwiperSlide>

        <SwiperSlide data-hash="slide2">
          <Link href="/america">
            <ChakraLink as="a">
              <Img src="/america.jpg" w={isWideVersion ? "100%" : "auto"} h={isWideVersion ? "auto" : "100%"} transform={isWideVersion ? "translate(0, -50%)" : ""} />
              <VStack
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                <Text fontSize={isWideVersion ? "48" : "24"} fontWeight="600" color="light.headings">
                  Am??rica
            </Text>
                <Text fontSize={isWideVersion ? "24" : "14"} fontWeight="600" color="light.info">
                  Cheio de riquezas.
            </Text>
              </VStack>
            </ChakraLink>
          </Link>
        </SwiperSlide>

        <SwiperSlide data-hash="slide3">
          <Link href="/africa">
            <ChakraLink as="a">
              <Img src="/africa.jpg" w={isWideVersion ? "100%" : "auto"} h={isWideVersion ? "auto" : "100%"} transform={isWideVersion ? "translate(0, -50%)" : ""} />
              <VStack
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                <Text fontSize={isWideVersion ? "48" : "24"} fontWeight="600" color="light.headings">
                  ??frica
            </Text>
                <Text fontSize={isWideVersion ? "24" : "14"} fontWeight="600" color="light.info">
                  Ber??o da civiliza????o.
            </Text>
              </VStack>
            </ChakraLink>
          </Link>
        </SwiperSlide>

        <SwiperSlide data-hash="slide4">
          <Link href="/asia">
            <ChakraLink as="a">
              <Img src="/asia.jpg" w={isWideVersion ? "100%" : "auto"} h={isWideVersion ? "auto" : "100%"} transform={isWideVersion ? "translate(0, -50%)" : ""} />
              <VStack
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                <Text fontSize={isWideVersion ? "48" : "24"} fontWeight="600" color="light.headings">
                  ??sia
            </Text>
                <Text fontSize={isWideVersion ? "24" : "14"} fontWeight="600" color="light.info">
                  Muitas culturas diferentes.
            </Text>
              </VStack>
            </ChakraLink>
          </Link>
        </SwiperSlide>

        <SwiperSlide data-hash="slide5">
          <Link href="/oceania">
            <ChakraLink as="a">
              <Img src="/oceania.jpg" w={isWideVersion ? "100%" : "auto"} h={isWideVersion ? "auto" : "100%"} transform={isWideVersion ? "translate(0, -50%)" : ""} />
              <VStack
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                <Text fontSize={isWideVersion ? "48" : "24"} fontWeight="600" color="light.headings">
                  Oceania
            </Text>
                <Text fontSize={isWideVersion ? "24" : "14"} fontWeight="600" color="light.info">
                  N??o tem copa do mundo.
            </Text>
              </VStack>
            </ChakraLink>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};