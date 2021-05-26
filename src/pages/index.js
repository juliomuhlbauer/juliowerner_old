import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Circle,
  Divider,
  Flex,
  Heading,
  HStack,
  Img,
  Link,
  Portal,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Animation from "@/components/animation";
import Opacity from "@/components/opacity";
import Nav from "@/components/nav";

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

function isOdd(num) {
  if (num % 2 == 1) {
    return true;
  } else if (num % 2 == 0) {
    return false;
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Júlio Werner</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Nav />
      <Center>
        <Stack
          as="section"
          p={2}
          align="center"
          flexDirection={{ base: "column-reverse", md: "row" }}
          maxW="5xl"
        >
          <Stack m={4} spacing={4}>
            <Heading
              as="h1"
              textAlign="center"
              bgGradient="linear(to-r, jw.600, jw.100)"
              bgClip="text"
              fontSize="5xl"
              fontWeight="extrabold"
            >
              Júlio Werner
            </Heading>
            <Box
              as={Link}
              _hover={{
                bgColor: "rgba(244, 88, 49, 0.1)",
              }}
              href="https://arededofuturo.com.br/"
              isExternal
              p={4}
              borderRadius="md"
              color="jw.500"
            >
              <HStack spacing={4}>
                <Img src="/logo/RDF.jpg" w="54px" />
                <Heading
                  textAlign={{ base: "left", md: "left" }}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="semibold"
                >
                  Co-Founder & CTO at A Rede do Futuro
                </Heading>
              </HStack>
            </Box>
            <Box
              as={Link}
              _hover={{
                bgColor: "rgba(244, 88, 49, 0.1)",
              }}
              href="https://www.instagram.com/mauabusinessclub/"
              isExternal
              p={4}
              borderRadius="md"
              color="jw.500"
            >
              <HStack spacing={4}>
                <Img src="/logo/MBC.jpg" w="54px" />
                <Heading
                  textAlign={{ base: "left", md: "left" }}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="semibold"
                >
                  Member at Mauá Business Club
                </Heading>
              </HStack>
            </Box>
            <Box
              as={Link}
              _hover={{
                bgColor: "rgba(244, 88, 49, 0.1)",
              }}
              href="https://maua.br/"
              isExternal
              p={4}
              borderRadius="md"
              color="jw.500"
            >
              <HStack spacing={4}>
                <Img src="/logo/IMT.jpg" w="54px" />

                <Heading
                  textAlign={{ base: "left", md: "left" }}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="semibold"
                >
                  Studying Business Administration at Instituto Mauá de
                  Tecnologia
                </Heading>
              </HStack>
            </Box>
          </Stack>
          <Img
            borderRadius="xl"
            src="/Picture.png"
            w={{ base: "300px", md: "350px", lg: "400px" }}
            htmlWidth={{ base: "300px", md: "350px", lg: "400px" }}
            htmlHeight={{ base: "300px", md: "350px", lg: "400px" }}
            objectFit="contain"
            m={4}
          />
        </Stack>
      </Center>

      <Box mt={6} mb={24} py={4} as="section" pos="relative">
        {TimelineData.map((item, index) => (
          <HStack
            key={index}
            spacing={4}
            my={6}
            align="center"
            justify="center"
            as={item.link && Link}
            href={item.link}
            isExternal={(item.link && true) || false}
            _hover={{
              bgColor: "rgba(244, 88, 49, 0.1)",
            }}
            p={4}
            borderRadius="md"
            color="jw.500"
            w="fit-content"
            mx="auto"
          >
            <Box textAlign="right" w={{ base: "150px", md: "200px" }}>
              <Heading
                fontWeight="semibold"
                fontSize="xl"
                color={(!isOdd(index) && "jw.500") || "white"}
              >
                {(!isOdd(index) && item.title) || item.when}
              </Heading>
            </Box>

            <Circle size="30px" bg="jw.500" ring="5px" ringColor="gray.800" />

            <Box textAlign="left" w={{ base: "150px", md: "200px" }}>
              <Heading
                fontWeight="semibold"
                fontSize="xl"
                color={(isOdd(index) && "jw.500") || "white"}
              >
                {(isOdd(index) && item.title) || item.when}
              </Heading>
            </Box>
          </HStack>
        ))}

        <Center zIndex={-1} w="100%" pos="absolute" top="0" h="100%">
          <Divider
            bgGradient="linear(to-b, jw.600, jw.100)"
            w="5px"
            borderRadius="xl"
            orientation="vertical"
          />
        </Center>
      </Box>
    </>
  );
}
