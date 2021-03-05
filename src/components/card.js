import {
  Box,
  Heading,
  Image,
  Stack,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
import NextImage from "next/image";

export default function Card(props) {
  return (
    <Stack
      alignItems="center"
      w="320px"
      h="320px"
      bg={useColorModeValue("white", "gray.700")}
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
      <Box>
        <Image
          src={props.image}
          transform={"scale(" + props.scale + ")"}
          maxH="200px"
        />
      </Box>
      <Heading fontSize="2xl">{props.title}</Heading>
    </Stack>
  );
}
