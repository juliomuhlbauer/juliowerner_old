import { Box, Center, Wrap } from "@chakra-ui/react";
import Card from "components/card";
import Page from "components/page";

export default function Services() {
  return (
    <Page title="Services">
      <Center as="section" h={{ base: "100%", sm: "100%", md: "75vh" }}>
        <Wrap m={4} justify="center" spacing={12}>
          <Card title="Business Plan" image="/services/Business.png" />
          <Card title="Brand Building" image="/services/Brand.png" />
          <Card title="Deploy" image="/services/Deploy.png" />
        </Wrap>
      </Center>
    </Page>
  );
}
