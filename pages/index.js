import Head from "next/head";
import NextLink from "next/link";

import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  LinkOverlay,
  Stack,
} from "@chakra-ui/react";
import Animation from "components/animation";

import ReactCountryFlag from "react-country-flag";

export default function Home() {
  return (
    <>
      <Head>
        <title>Júlio Werner</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
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
            <Center>
              <Stack spacing={4} direction="row">
                <NextLink href="/">
                  <Button leftIcon={<ReactCountryFlag countryCode="US" svg />}>
                    EN
                  </Button>
                </NextLink>
                <NextLink href="br">
                  <Button leftIcon={<ReactCountryFlag countryCode="BR" svg />}>
                    PT
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
