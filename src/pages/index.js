import {
  Box,
  Center,
  Circle,
  Container,
  Divider,
  Heading,
  HStack,
  Img,
  Link,
  Stack,
} from "@chakra-ui/react";
import Nav from "@/components/Nav";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const AboutData = [
  {
    title: "Co-Founder & CTO at A Rede do Futuro",
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
    title: "Studying Business Administration at Instituto Mauá de Tecnologia",
    logo: "IMT.jpg",
    link: "https://maua.br/",
    alt: "Logo Instituto Mauá de Tecnologia",
  },
];

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
      <Container maxW="container.lg" p={0}>
        <Nav />
        <Stack
          as="section"
          p={2}
          align="center"
          flexDirection={{ base: "column-reverse", md: "row" }}
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
            {AboutData.map((item, index) => (
              <Link
                key={index}
                _hover={{
                  bgColor: "rgba(244, 88, 49, 0.1)",
                  textDecoration: "underline",
                }}
                href={item.link}
                isExternal
                p={4}
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
          <Img
            borderRadius="xl"
            src="/Picture.webp"
            w={{ base: "300px", md: "350px", lg: "400px" }}
            htmlWidth="400px"
            htmlHeight="400px"
            objectFit="contain"
            m={4}
            alt="Photo Júlio Werner"
          />
        </Stack>

        <Box mt={6} mb={24} py={4} as="section" pos="relative">
          {TimelineData.map((item, index) => (
            <Link
              key={index}
              as={HStack}
              spacing={4}
              my={6}
              align="center"
              justify="center"
              href={item.link}
              isExternal={(item.link && true) || false}
              _hover={{
                bgColor: "rgba(244, 88, 49, 0.1)",
                textDecoration: item.link ? "underline" : "none",
              }}
              p={4}
              borderRadius="md"
              color="jw.500"
              w={{ base: "95%", lg: "60%" }}
              mx="auto"
            >
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
        </Box>
      </Container>
    </>
  );
}
