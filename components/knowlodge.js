import {
  Image,
  Progress,
  SimpleGrid,
  Box,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";

export default function Knowlodge(props) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      rounded={"md"}
      boxShadow={"xl"}
      p={4}
      transition="all 0.25s ease"
      _hover={{
        transform: "translateY(-15px)",
        boxShadow: "2xl",
      }}
    >
      <SimpleGrid templateColumns="1fr 2fr" alignItems="center">
        <Image
          borderRadius={props.radius}
          justifySelf="left"
          src={props.image}
          maxW="100px"
          maxH="64px"
        />

        <Progress
          colorScheme="pallete"
          rounded={8}
          w="100%"
          value={props.value}
        />
      </SimpleGrid>
    </Box>
  );
}
