import {
  Box,
  Center,
  Circle,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Img,
  Link,
  Stack,
} from "@chakra-ui/react";
import Nav from "@/components/Nav";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Animation from "@/components/Animation";
import { Image } from "./Image";
import Picture from "public/Picture.png";

function isOdd(num) {
  if (num % 2 == 1) {
    return true;
  } else if (num % 2 == 0) {
    return false;
  }
}

export default function About() {
  return (
    <>
      <Box as="section" w="100%" my={4}>
        <Animation>
          <Box my={8}>
            <Heading
              my={2}
              fontWeight="extrabold"
              fontSize="5xl"
              color="jw.500"
            >
              About
            </Heading>
            <Divider />
          </Box>
          <Resume />
        </Animation>
      </Box>

      <Box as="section" w="100%" my={4}>
        <Animation>
          <Box my={8}>
            <Heading
              my={2}
              fontWeight="extrabold"
              fontSize="5xl"
              color="jw.500"
            >
              Timeline
            </Heading>
            <Divider />
          </Box>
          <Timeline />
        </Animation>
      </Box>
    </>
  );
}

const AboutData = [
  {
    title: "Making A Rede do Futuro",
    logo: "RDF.jpg",
    link: "https://arededofuturo.com.br/",
    alt: "Logo A Rede do Futuro",
  },
  {
    title: "Member at Mauá Business Club",
    logo: "MBC.jpg",
    link: "https://www.instagram.com/mauabusinessclub/",
    alt: "Logo Mauá Business Club",
  },
  {
    title: "Studying Business Administration",
    logo: "IMT.jpg",
    link: "https://maua.br/",
    alt: "Logo Instituto Mauá de Tecnologia",
  },
];

function Resume() {
  return (
    <Stack align="center" flexDirection={{ base: "column-reverse", md: "row" }}>
      <Stack m={4} spacing={6}>
        <Heading
          as="h1"
          textAlign="center"
          bgGradient="linear(to-r, jw.600, jw.100)"
          bgClip="text"
          fontSize={{ base: "5xl", lg: "6xl" }}
          fontWeight="black"
        >
          Júlio Werner
        </Heading>
        {AboutData.map((item, index) => (
          <Link
            key={index}
            _hover={{
              bgColor: "rgba(244, 88, 49, 0.1)",
              textDecoration: "underline",
            }}
            href={item.link}
            isExternal
            p={2}
            borderRadius="md"
            color="jw.500"
          >
            <HStack spacing={4}>
              <Img
                src={"/logo/" + item.logo}
                w="54px"
                h="54px"
                htmlWidth="54px"
                htmlHeight="54px"
                alt={item.alt}
                borderRadius="md"
              />
              <Heading
                textAlign={{ base: "left", md: "left" }}
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="semibold"
              >
                {item.title}
              </Heading>
            </HStack>
          </Link>
        ))}
      </Stack>

      <Image
        width="400px"
        height="400px"
        objectFit="contain"
        w={{ base: "300px", md: "350px", lg: "400px" }}
        src={Picture}
        alt="Júlio Werner"
        placeholder="blur"
        borderRadius="xl"
        m={4}
      />
    </Stack>
  );
}

const TimelineData = [
  {
    title: "Mauá Business Club",
    when: "Mar, 2021",
    link: "https://www.instagram.com/mauabusinessclub/",
  },
  {
    title: "University",
    when: "Feb, 2021",
  },
  {
    title: "A Rede do Futuro",
    when: "Sep, 2020",
    link: "http://arededofuturo.com.br/",
  },
  {
    title: "Programming",
    when: "Sep, 2020",
  },
  {
    title: "3D Animations",
    when: "Sep, 2015",
  },
  {
    title: "Born",
    when: "Mar, 2003",
  },
];

function Timeline() {
  return (
    <Stack my={6} py={12} pos="relative" spacing={8}>
      {TimelineData.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          as={item.link ? "a" : "div"}
          cursor={item.link ? "pointer" : "default"}
          isExternal={(item.link && true) || false}
          color="jw.500"
          p={2}
          py={4}
          _hover={{
            bgColor: "rgba(244, 88, 49, 0.1)",
            textDecoration: item.link ? "underline" : "none",
          }}
          borderRadius="md"
        >
          <HStack mx="auto" spacing={4} align="center" justify="center">
            <Box textAlign="right" minW="100px" w="100%">
              <Heading
                fontWeight="semibold"
                fontSize="xl"
                color={(!isOdd(index) && "jw.500") || "white"}
              >
                {!isOdd(index) ? item.title : item.when}{" "}
                {!isOdd(index) && item.link && <ExternalLinkIcon />}
              </Heading>
            </Box>

            <Circle size="30px" bg="jw.500" ring="5px" ringColor="gray.800" />

            <Box textAlign="left" minW="100px" w="100%">
              <Heading
                fontWeight="semibold"
                fontSize="xl"
                color={(isOdd(index) && "jw.500") || "white"}
              >
                {isOdd(index) ? item.title : item.when}{" "}
                {isOdd(index) && item.link && <ExternalLinkIcon />}
              </Heading>
            </Box>
          </HStack>
        </Link>
      ))}

      <Center zIndex={-1} w="100%" pos="absolute" top="0" h="100%">
        <Divider
          bgGradient="linear(to-b, jw.600, jw.100)"
          w="5px"
          borderRadius="xl"
          orientation="vertical"
        />
      </Center>
    </Stack>
  );
}
