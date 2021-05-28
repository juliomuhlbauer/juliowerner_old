import NextLink from "next/link";

import {
  IconButton,
  Heading,
  Flex,
  Spacer,
  Box,
  Portal,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Animation from "@/components/animation";
import Opacity from "@/components/opacity";

export default function Layout(props) {
  const mobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Animation>
        <Flex
          as="header"
          m={6}
          mb={12}
          alignItems="center"
          justify="space-around"
        >
          <Spacer />
          <Heading
            as="h1"
            bgGradient="linear(to-r, jw.600,jw.100)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="bold"
          >
            {props.children}
          </Heading>
          <Spacer />
        </Flex>
      </Animation>
      <Portal>
        <Opacity>
          {mobile ? (
            <Box
              display={{ base: "block", md: "none" }}
              pos="fixed"
              bottom={8}
              ml={12}
            >
              <NextLink href="./">
                <IconButton
                  size="lg"
                  colorScheme="jw"
                  icon={<ArrowBackIcon />}
                  isRound
                />
              </NextLink>
            </Box>
          ) : (
            <Box
              display={{ base: "none", md: "block" }}
              pos="fixed"
              top={8}
              ml={12}
            >
              <NextLink href="./">
                <IconButton
                  variant="outline"
                  colorScheme="jw"
                  icon={<ArrowBackIcon />}
                />
              </NextLink>
            </Box>
          )}
        </Opacity>
      </Portal>
    </>
  );
}
