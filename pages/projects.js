import { Center, Link, SimpleGrid } from "@chakra-ui/react";
import Card from "components/card";
import Page from "components/page";

export default function Projects() {
  return (
    <Page title="Projects">
      <Center as="section" h={{ base: "100%", xl: "75vh" }}>
        <SimpleGrid
          templateColumns={{ base: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
          my={4}
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
            />
          </Link>
          <Link isExternal href="https://cryptogains.glideapp.io/">
            <Card
              title="App - Crypto Gains"
              image="/projects/Crypto Gains.png"
            />
          </Link>
        </SimpleGrid>
      </Center>
    </Page>
  );
}
