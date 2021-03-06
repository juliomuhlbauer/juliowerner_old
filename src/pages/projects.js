import { Center, Link, SimpleGrid } from "@chakra-ui/react";
import Card from "@/components/card";
import Page from "@/components/page";
import { ProjectsData } from "@/data/projects";

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
          {ProjectsData.map((ProjectsData) => (
            <Link isExternal href={ProjectsData.link}>
              <Card
                title={ProjectsData.title}
                image={ProjectsData.image}
                alt={ProjectsData.title}
              />
            </Link>
          ))}
        </SimpleGrid>
      </Center>
    </Page>
  );
}
