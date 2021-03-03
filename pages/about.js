import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Heading,
  Image,
  Portal,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Knowlodge from "components/knowlodge";
import Page from "components/page";

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
          Hey, my name is Júlio Werner. I´m 17 years old and I live in São
          Paulo, Brazil.
          <br /> <br /> I'm a designer, programmer and sometimes entrepreneur.
          <br /> <br /> I am currently studying Business Administration at IMT -
          Mauá Institute of Technology.
        </Text>

        <Image
          maxW={{ base: "350px", md: "400px" }}
          borderRadius="lg"
          src="/Picture.png"
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

      <Title title="Languages" />
      <KnowlodgeSection>
        <Knowlodge
          image="/knowlodge/languages/Brazil.png"
          radius="md"
          value="100"
        />
        <Knowlodge
          image="/knowlodge/languages/US.png"
          radius="md"
          value="75"
          text="Cambridge B2 2019"
          icon={<CheckIcon />}
        />
        <Knowlodge
          image="/knowlodge/languages/Spain.png"
          radius="md"
          value="30"
        />
      </KnowlodgeSection>

      <Title title="Design" />
      <KnowlodgeSection>
        <Knowlodge image="/knowlodge/design/Figma.png" value="100" />
        <Knowlodge image="/knowlodge/design/After Effects.png" value="75" />
        <Knowlodge image="/knowlodge/design/Dimension.png" value="50" />
        <Knowlodge image="/knowlodge/design/Illustrator.png" value="75" />
        <Knowlodge image="/knowlodge/design/InDesign.png" value="75" />
        <Knowlodge image="/knowlodge/design/Lightroom.png" value="60" />
        <Knowlodge image="/knowlodge/design/Photoshop.png" value="80" />
        <Knowlodge image="/knowlodge/design/Premiere Pro.png" value="80" />
        <Knowlodge image="/knowlodge/design/XD.png" value="100" />
        <Knowlodge image="/knowlodge/design/Cinema 4D.png" value="50" />
      </KnowlodgeSection>

      <Title title="Programming" />
      <KnowlodgeSection>
        <Knowlodge image="/knowlodge/code/HTML.png" value="100" />
        <Knowlodge image="/knowlodge/code/CSS.png" value="75" />
        <Knowlodge image="/knowlodge/code/JavaScript.png" value="25" />
        <Knowlodge image="/knowlodge/code/React.png" value="25" />
        <Knowlodge
          image={useColorModeValue(
            "/knowlodge/code/NextJS.png",
            "/knowlodge/code/NextJS White.png"
          )}
          value="50"
        />
        <Knowlodge image="/knowlodge/code/Flutter.png" value="25" />
        <Knowlodge image="/knowlodge/code/Firebase.png" value="25" />
      </KnowlodgeSection>
    </Page>
  );
}
