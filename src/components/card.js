import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextImage from "next/image";
import Image from "@/components/image";

export default function Card(props) {
  return (
    <Box as={props.link ? LinkBox : Box}>
      <Stack
        as={props.link ? LinkOverlay : Stack}
        isExternal={props.link}
        href={props.link}
        alignItems="center"
        w="320px"
        h="320px"
        bg={useColorModeValue("white", "gray.700")}
        bgColor={props.bg}
        rounded={"md"}
        boxShadow={"xl"}
        spacing={6}
        p={4}
        transition="all 0.25s ease"
        _hover={{
          transform: "translateY(-15px)",
          boxShadow: "2xl",
        }}
      >
        <Image
          src={props.image}
          maxH="200px"
          objectFit="cover"
          htmlHeight="200px"
          alt={props.alt}
        />

        <Heading color={props.color} fontSize="2xl">
          {props.title}
        </Heading>
      </Stack>
    </Box>
  );
}
