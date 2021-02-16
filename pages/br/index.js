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

export default function Home() {
  return (
    <>
      <Head>
        <title>Júlio Werner</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Animation>
        <Flex my={8} mx={12}>
          <Spacer />
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<ReactCountryFlag countryCode="BR" svg />}
              rightIcon={<ChevronDownIcon />}
            >
              PT
            </MenuButton>
            <MenuList>
              <NextLink href="/">
                <MenuItem icon={<ReactCountryFlag countryCode="US" svg />}>
                  English
                </MenuItem>
              </NextLink>
              <NextLink href="br">
                <MenuItem
                  icon={<ReactCountryFlag countryCode="BR" svg />}
                  command={<CheckIcon />}
                >
                  Português
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Flex>
      </Animation>
      <Center h="75vh">
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
                <NextLink href="br/servicos">
                  <Button>Serviços</Button>
                </NextLink>
                <NextLink href="br/projetos">
                  <Button>Projetos</Button>
                </NextLink>
                <NextLink href="br/sobre">
                  <Button>Sobre</Button>
                </NextLink>
                <NextLink href="br/contato">
                  <Button variant="outline" colorScheme="gradient">
                    Contato
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
