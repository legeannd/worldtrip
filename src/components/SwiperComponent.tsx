import { Box, Flex, Img, Text, VStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);


export const SwiperComponent = () => {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      maxH="450px"
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
          <Img src="/europe.png" w="100%" h="auto"/>
          <VStack
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Text fontSize="48" fontWeight="600" color="light.headings">
              Europa
            </Text>
            <Text fontSize="24" fontWeight="600" color="light.info">
              O continente mais antigo.
            </Text>
          </VStack>          
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
        <Img src="/america.jpg" w="100%" h="auto" transform="translate(0, -50%)"/>
          <VStack
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Text fontSize="48" fontWeight="600" color="light.headings">
              América
            </Text>
            <Text fontSize="24" fontWeight="600" color="light.info">
              Cheio de riquezas.
            </Text>
          </VStack>          
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
        <Img src="/africa.jpg" w="100%" h="auto" transform="translate(0, -50%)"/>
          <VStack
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Text fontSize="48" fontWeight="600" color="light.headings">
              África
            </Text>
            <Text fontSize="24" fontWeight="600" color="light.info">
              Berço da civilização.
            </Text>
          </VStack>          
        </SwiperSlide>
        <SwiperSlide data-hash="slide4">
        <Img src="/asia.jpg" w="100%" h="auto" transform="translate(0, -50%)"/>
          <VStack
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Text fontSize="48" fontWeight="600" color="light.headings">
              Ásia
            </Text>
            <Text fontSize="24" fontWeight="600" color="light.info">
              Muitas culturas diferentes.
            </Text>
          </VStack>          
        </SwiperSlide>
        <SwiperSlide data-hash="slide5">
        <Img src="/oceania.jpg" w="100%" h="auto" transform="translate(0, -50%)"/>
          <VStack
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Text fontSize="48" fontWeight="600" color="light.headings">
              Oceania
            </Text>
            <Text fontSize="24" fontWeight="600" color="light.info">
              Não tem copa do mundo.
            </Text>
          </VStack>          
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};