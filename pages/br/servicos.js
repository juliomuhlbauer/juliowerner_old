import { Box, Center, Wrap } from "@chakra-ui/react";
import Card from "components/card";
import Page from "components/page";

export default function Servicos() {
  return (
    <Page title="Serviços">
      <Center as="section" h={{ base: "100%", sm: "100%", md: "75vh" }}>
        <Wrap m={4} justify="center" spacing={12}>
          <Card
            title="Planejamento de Négocio"
            image="/services/Business.svg"
          />
          <Card title="Construção de Marca" image="/services/Brand.svg" />
          <Card title="Implementação" image="/services/Deploy.svg" />
        </Wrap>
      </Center>
    </Page>
  );
}
