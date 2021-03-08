import Head from "next/head";
import NextLink from "next/link";

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Animation from "@/components/animation";
import ReactCountryFlag from "react-country-flag";
import {
  CheckIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import Opacity from "@/components/opacity";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Júlio Werner</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Opacity>
        <Box as="header" pos="fixed" w="100vw">
          <Flex my={8} mx={12}>
            <IconButton
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            ></IconButton>
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
                    rounded={4}
                    icon={<ReactCountryFlag countryCode="US" svg />}
                    command={<CheckIcon />}
                  >
                    English
                  </MenuItem>
                </NextLink>
                <NextLink href="br">
                  <MenuItem
                    rounded={4}
                    icon={<ReactCountryFlag countryCode="BR" svg />}
                  >
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
                bgGradient="linear(to-r, pallete.600, pallete.100)"
                bgClip="text"
                fontSize={{ base: "5xl", sm: "6xl" }}
                fontWeight="extrabold"
              >
                Júlio Werner
              </Heading>
            </Center>
            <Center>
              <ButtonGroup spacing={4}>
                <NextLink href="services">
                  <Button>Services</Button>
                </NextLink>
                <NextLink href="projects">
                  <Button>Projects</Button>
                </NextLink>
                <NextLink href="about">
                  <Button>About</Button>
                </NextLink>
              </ButtonGroup>
            </Center>
            <Center>
              <ButtonGroup spacing={4} size="lg">
                <IconButton
                  as="a"
                  href="https://www.instagram.com/juliowernermm/"
                  target="_blank"
                  icon={<FaInstagram size={32} />}
                />
                <IconButton
                  as="a"
                  href="https://github.com/juliowernermm"
                  target="_blank"
                  icon={<FaGithub size={32} />}
                />
              </ButtonGroup>
            </Center>
          </Stack>
        </Animation>
      </Center>
    </>
  );
}
