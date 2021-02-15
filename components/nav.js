import NextLink from "next/link";

import {
  Button,
  Link,
  Stack,
  IconButton,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Nav({ children }) {
  return (
    <>
      <Flex
        as="header"
        my={4}
        alignItems="center"
        justifyContent="space-around"
      >
        <NextLink href="javascript:history.back()">
          <IconButton
            variant="outline"
            colorScheme="gradient"
            icon={<ArrowBackIcon />}
          />
        </NextLink>
        <Heading
          as="h1"
          bgGradient="linear(to-r, gradient.100,gradient.200)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="bold"
        >
          {children}
        </Heading>
        <Button variant="outline" colorScheme="gradient">
          Contato
        </Button>
      </Flex>
    </>
  );
}
