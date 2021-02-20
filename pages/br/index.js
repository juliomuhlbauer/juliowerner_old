import Head from "next/head";
import NextLink from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
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
} from "@chakra-ui/react";
import Animation from "components/animation";
import ReactCountryFlag from "react-country-flag";
import {
  CheckIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { GitHub, Instagram } from "react-feather";
import Opacity from "components/opacity";

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
        </Box>
      </Opacity>

      <Center h="100vh">
        <Animation>
          <Stack spacing={4}>
            <Center>
              <Heading
                as="h1"
                textAlign="center"
                bgGradient="linear(to-r, pallete.600,pallete.200)"
                bgClip="text"
                fontSize={{ base: "5xl", sm: "6xl" }}
                fontWeight="extrabold"
              >
                Júlio Werner
              </Heading>
            </Center>
            <Center>
              <ButtonGroup spacing={4}>
                <NextLink href="br/servicos">
                  <Button>Serviços</Button>
                </NextLink>
                <NextLink href="br/projetos">
                  <Button>Projetos</Button>
                </NextLink>
                <NextLink href="br/sobre">
                  <Button>Sobre</Button>
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
