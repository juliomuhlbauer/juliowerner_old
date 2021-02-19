import { Center, Link, Wrap } from "@chakra-ui/react";
import Card from "components/card";
import Page from "components/page";

export default function Projetos() {
  return (
    <Page title="Projetos">
      <Center as="section" h={{ base: "100%", sm: "100%", md: "75vh" }}>
        <Wrap m={4} justify="center" spacing={12}>
          <Link isExternal href="https://arededofuturo.com.br/home-page/">
            <Card title="A Rede do Futuro" image="/projects/RDF.png" />
          </Link>
        </Wrap>
      </Center>
    </Page>
  );
}
