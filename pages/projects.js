import { Center, Link, SimpleGrid } from "@chakra-ui/react";
import Card from "components/card";
import Page from "components/page";

export default function Projects() {
  return (
    <Page title="Projects">
      <Center as="section">
        <SimpleGrid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          m={4}
          justify="center"
          spacing={12}
        >
          <Link isExternal href="https://arededofuturo.com.br/home-page/">
            <Card title="A Rede do Futuro" image="/projects/RDF.png" />
          </Link>
          <Link isExternal href="https://arededofuturo.glideapp.io/">
            <Card
              title="App - A Rede do Futuro"
              image="/projects/App - RDF.png"
              scale="1"
            />
          </Link>

          <Card title="Erich" image="/projects/Logos/Erich.png" scale="1.4" />
          <Card
            title="Allan Queiroz"
            image="/projects/Logos/Allan Queiroz.png"
            scale="1.6"
          />
          <Card
            title="Karen Rocha"
            image="/projects/Logos/Karen Rocha.png"
            scale="1.6"
          />
        </SimpleGrid>
      </Center>
    </Page>
  );
}
