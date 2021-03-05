import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import Card from "@/components/card";
import Page from "@/components/page";
import { ServicesData } from "@/data/services";

export default function Services() {
  return (
    <Page title="Services">
      <Center as="section" h={{ base: "100%", xl: "75vh" }}>
        <SimpleGrid
          templateColumns={{ base: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
          my={4}
          justify="center"
          spacing={12}
        >
          {ServicesData.map((ServicesData) => (
            <Card title={ServicesData.title} image={ServicesData.image} />
          ))}
        </SimpleGrid>
      </Center>
    </Page>
  );
}
