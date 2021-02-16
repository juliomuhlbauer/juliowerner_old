import Head from "next/head";
import NextLink from "next/link";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import Animation from "components/animation";
import ReactCountryFlag from "react-country-flag";
import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Opacity from "components/opacity";

export default function Home() {
  return (
    <>
      <Head>
        <title>Júlio Werner</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Opacity>
        <Box as="header" pos="fixed" w="100vw">
          <Flex my={8} mx={12}>
            <Spacer />
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<ReactCountryFlag countryCode="US" svg />}
                rightIcon={<ChevronDownIcon />}
              >
                EN
              </MenuButton>
              <MenuList>
                <NextLink href="/">
                  <MenuItem
                    icon={<ReactCountryFlag countryCode="US" svg />}
                    command={<CheckIcon />}
                  >
                    English
                  </MenuItem>
                </NextLink>
                <NextLink href="br">
                  <MenuItem icon={<ReactCountryFlag countryCode="BR" svg />}>
                    Português
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Opacity>

      <Center h="100vh">
        <Animation>
          <Stack spacing={4}>
            <Center>
              <Heading
                as="h1"
                textAlign="center"
                bgGradient="linear(to-r, gradient.100,gradient.200)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
              >
                Júlio Werner
              </Heading>
            </Center>
            <Center>
              <Stack spacing={4} direction="row">
                <NextLink href="services">
                  <Button>Services</Button>
                </NextLink>
                <NextLink href="projects">
                  <Button>Projects</Button>
                </NextLink>
                <NextLink href="about">
                  <Button>About</Button>
                </NextLink>
                <NextLink href="contact">
                  <Button variant="outline" colorScheme="gradient">
                    Contact
                  </Button>
                </NextLink>
              </Stack>
            </Center>
          </Stack>
        </Animation>
      </Center>
    </>
  );
}
