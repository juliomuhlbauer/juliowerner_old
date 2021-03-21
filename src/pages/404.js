import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Error() {
  return (
    <Center h="100vh">
      <Stack align="center" spacing={4}>
        <Heading
          as="h1"
          textAlign="center"
          bgGradient="linear(to-r, pallete.600,pallete.100)"
          bgClip="text"
          fontSize={"8xl"}
          fontWeight="extrabold"
        >
          404
        </Heading>
        <NextLink href="/">
          <Button variant="outline" colorScheme="pallete">
            Homepage
          </Button>
        </NextLink>
      </Stack>
    </Center>
  );
}