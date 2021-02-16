import NextLink from "next/link";

import {
  Button,
  Link,
  Stack,
  IconButton,
  Heading,
  Flex,
  Spacer,
  Box,
  Center,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Nav({ children }) {
  return (
    <>
      <Flex as="header" m={4} alignItems="center" justify="space-around">
        <NextLink href="javascript:history.back()">
          <IconButton
            display={{ base: "none", md: "block" }}
            variant="outline"
            colorScheme="gradient"
            icon={<ArrowBackIcon />}
          />
        </NextLink>
        <Spacer />
        <Heading
          as="h1"
          bgGradient="linear(to-r, gradient.100,gradient.200)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="bold"
        >
          {children}
        </Heading>
        <Spacer />
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        pos="fixed"
        m={8}
        bottom="0"
        left="0"
        boxShadow="2xl"
      >
        <NextLink href="javascript:history.back()">
          <IconButton
            size="lg"
            colorScheme="gradient"
            icon={<ArrowBackIcon />}
            isRound
          />
        </NextLink>
      </Box>
    </>
  );
}
