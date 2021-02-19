import {
  Box,
  Heading,
  Stack,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
import NextImage from "next/image";

export default function Card(props) {
  return (
    <WrapItem>
      <Stack
        cursor="pointer"
        alignItems="center"
        w="320px"
        h="320px"
        // bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        boxShadow={"xl"}
        spacing={6}
        p={4}
        sx={{ transition: "all 0.25s ease" }}
        _hover={{
          transform: "translateY(-15px)",
          boxShadow: "2xl",
        }}
      >
        <Box>
          <NextImage src={props.image} width="200px" height="200px" />
        </Box>
        <Heading fontSize="2xl">{props.title}</Heading>
      </Stack>
    </WrapItem>
  );
}
