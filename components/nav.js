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
import Animation from "components/animation";
import Opacity from "components/opacity";

export default function Nav({ children }) {
  return (
    <>
      <Animation>
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
      </Animation>
      <Opacity>
        <Box
          display={{ base: "block", md: "none" }}
          pos="fixed"
          bottom="10vh"
          ml={16}
        >
          <NextLink href="javascript:history.back()">
            <Box>
              <IconButton
                size="lg"
                colorScheme="gradient"
                icon={<ArrowBackIcon />}
                isRound
              />
            </Box>
          </NextLink>
        </Box>
      </Opacity>
    </>
  );
}
