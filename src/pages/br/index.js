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
  Link,
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
import { Links } from "@/data/links";

const Areas = [
  {
    title: "Projetos",
    link: "br/projetos",
  },
  {
    title: "Sobre",
    link: "br/sobre",
  },
];

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Opacity>
        <Box zIndex={1} as="header" pos="fixed" w="100vw">
          <Flex my={8} mx={12}>
            <IconButton
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
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
                  <MenuItem
                    rounded={4}
                    icon={<ReactCountryFlag countryCode="US" svg />}
                  >
                    English
                  </MenuItem>
                </NextLink>
                <NextLink href="br">
                  <MenuItem
                    rounded={4}
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
              </ButtonGroup>
            </Center>
          </Stack>
        </Animation>
      </Center>
    </>
  );
}
