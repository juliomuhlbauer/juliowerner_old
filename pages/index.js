import Head from "next/head";
import NextLink from "next/link";

import {
  Box,
  Button,
  Center,
  Heading,
  LinkOverlay,
  Stack,
} from "@chakra-ui/react";
import Animation from "../components/animation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Júlio Werner</title>
        <link rel="icon" href="/favicon.ico" />
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
                <NextLink href="servicos">
                  <Button>
                    <LinkOverlay>Serviços</LinkOverlay>
                  </Button>
                </NextLink>
                <NextLink href="projetos">
                  <Button>
                    <LinkOverlay>Projetos</LinkOverlay>
                  </Button>
                </NextLink>
                <NextLink href="sobre">
                  <Button>
                    <LinkOverlay>Sobre</LinkOverlay>
                  </Button>
                </NextLink>
                <NextLink href="contato">
                  <Button variant="outline" colorScheme="gradient">
                    <LinkOverlay>Contato</LinkOverlay>
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
