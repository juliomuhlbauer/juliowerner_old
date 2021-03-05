import {
  AspectRatio,
  Box,
  Center,
  Image,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "@/components/card";
import Page from "@/components/page";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import Head from "next/head";

const MauaJrData = [
  {
    image: "projects/mauajr/1.png",
  },
  {
    image: "projects/mauajr/2.png",
  },
  {
    image: "projects/mauajr/3.png",
  },
  {
    image: "projects/mauajr/4.png",
  },
];

export default function MauaJr() {
  SwiperCore.use([Pagination, Navigation]);
  return (
    <Page backLink="/br" title="Mauá Jr">
      <Center>
        <Box
          w={{ base: "360px", md: "540px" }}
          h={{ base: "450px", md: "675px" }}
        >
          <Swiper pagination navigation>
            {MauaJrData.map((MauaJrData) => (
              <SwiperSlide>
                <Image objectFit="cover" src={MauaJrData.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Center>
    </Page>
  );
}
