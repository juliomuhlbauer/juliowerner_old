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
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorMode,
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
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Links } from "@/data/links";

const Areas = [
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "About",
    link: "/about",
  },
];

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
                {Areas.map((Areas, index) => (
                  <NextLink key={index} href={Areas.link} passHref>
                    <Button>{Areas.title}</Button>
                  </NextLink>
                ))}
              </ButtonGroup>
            </Center>
            <Center>
              <ButtonGroup spacing={4} size="lg">
                {Links.map((Links, index) => (
                  <IconButton
                    key={index}
                    as={Link}
                    href={Links.link}
                    isExternal
                    icon={Links.icon}
                  />
                ))}
              </ButtonGroup>
            </Center>
          </Stack>
        </Animation>
      </Center>
    </>
  );
}
