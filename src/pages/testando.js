import NextImage from "next/image";
import { Heading, Img, Stack, HStack } from "@chakra-ui/react";
import Picture from "../../public/Picture.png";

export default function testando() {
  return (
    <HStack w="100%" align="center">
      <Stack spacing={4} align="center">
        <Heading>Chakra Img</Heading>
        <Img
          src="/Picture.png"
          width="400"
          height="400"
          alt="Photo Júlio Werner"
        />
      </Stack>
      <Stack spacing={4} align="center">
        <Heading>Next Static Image</Heading>
        <NextImage src={Picture} width="400" height="400" placeholder="blur" />
      </Stack>
      <Stack spacing={4} align="center">
        <Heading>Next Cloudinary</Heading>
        <NextImage
          src="https://res.cloudinary.com/arededofuturo/image/upload/v1623779297/Foto_de_Perfil.jpg"
          width="400"
          height="400"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/arededofuturo/image/upload/e_blur:1000/v1623779297/Foto_de_Perfil.jpg"
        />
      </Stack>
    </HStack>
  );
}
