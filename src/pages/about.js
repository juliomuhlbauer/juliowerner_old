import {
  Box,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Knowlodge from "@/components/knowlodge";
import Page from "@/components/page";
import { KnowlodgeData } from "@/data/about";
import Image from "@/components/image";

function Title(props) {
  return (
    <>
      <Heading as="h3" my={4} fontSize="3xl" fontWeight="500">
        {props.title}
      </Heading>
      <Divider />
    </>
  );
}

function KnowlodgeSection(props) {
  return (
    <SimpleGrid my={8} templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
      {props.children}
    </SimpleGrid>
  );
}

export default function About() {
  return (
    <Page title="About">
      <Stack
        spacing={8}
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Text fontSize="2xl" fontWeight="700">
          Hey, my name is Júlio Werner. I´m 18 years old and I live in São
          Paulo, Brazil.
          <br /> <br /> I'm a designer, programmer and sometimes entrepreneur.
          <br /> <br /> I am currently studying Business Administration at IMT -
          Mauá Institute of Technology.
        </Text>

        <Image
          borderRadius="lg"
          htmlWidth="400px"
          htmlHeight="400px"
          boxSize={{ base: "350px", md: "400px" }}
          src="https://ik.imagekit.io/juliowerner/Picture_yyApvmnJX.webp"
        />
      </Stack>
      <Heading
        as="h2"
        my={8}
        w={{ base: "100%", md: "50%" }}
        fontSize="3xl"
        fontWeight="700"
      >
        Here are some of my knowlodge:
      </Heading>

      {KnowlodgeData.map((KnowlodgeData, index) => (
        <Box key={index}>
          <Title title={KnowlodgeData.title} />
          <KnowlodgeSection>
            {KnowlodgeData.items.map((KnowlodgeData) => (
              <Knowlodge
                image={KnowlodgeData.image}
                image2={KnowlodgeData.image2}
                value={KnowlodgeData.value}
                icon={KnowlodgeData.icon}
                text={KnowlodgeData.text}
              />
            ))}
          </KnowlodgeSection>
        </Box>
      ))}
    </Page>
  );
}
