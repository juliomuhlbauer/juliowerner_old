import { CheckIcon } from "@chakra-ui/icons";
import {
  Divider,
  Heading,
  Image,
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

export default function Sobre() {
  return (
    <Page title="Sobre">
      <Stack
        spacing={8}
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Text fontSize="2xl" fontWeight="700">
          Olá, me chamo Júlio Werner. Tenho 17 anos e moro em São Paulo.
          <br /> <br /> Sou designer, programador e, de vez em quando,
          empreendedor. <br /> <br /> Atualmente estou estudando Administração
          de Empresas no IMT - Instituto Mauá de Tecnologia.
        </Text>

        <Image
          borderRadius="lg"
          boxSize={{ base: "350px", md: "400px" }}
          src="/Picture.png"
        />
      </Stack>
      <Text
        my={8}
        w={{ base: "100%", md: "50%" }}
        fontSize="3xl"
        fontWeight="700"
      >
        Aqui estão alguns dos meus conhecimentos:
      </Text>
      <Title title="Línguas" />
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
      <Title title="Programação" />
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
