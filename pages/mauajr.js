import {
  AspectRatio,
  Box,
  Center,
  Image,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "components/card";
import Page from "components/page";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import Head from "next/head";

export default function MauaJr() {
  SwiperCore.use([Pagination, Navigation]);
  return (
    <>
      <Head>
        <title>Mauá Jr | Júlio Werner</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Center h="100vh">
        <Box
          w={{ base: "360px", md: "540px" }}
          h={{ base: "450px", md: "675px" }}
        >
          <Swiper pagination navigation>
            <SwiperSlide>
              <Image objectFit="cover" src="projects/mauajr/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Image objectFit="cover" src="projects/mauajr/2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Image objectFit="cover" src="projects/mauajr/3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Image objectFit="cover" src="projects/mauajr/4.png" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Center>
    </>
  );
}
