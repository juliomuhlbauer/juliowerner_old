import { Center, Link, SimpleGrid } from "@chakra-ui/react";
import Card from "@/components/card";
import Page from "@/components/page";
import Airtable from "airtable";

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  const records = await airtable
    .base("appG7EIhRu9l6fKVI")("Projects")
    .select()
    .all();

  const projects = records.map((project) => {
    return {
      name: project.get("Name") || null,
      image: project.get("Image") || null,
      link: project.get("Link") || null,
      status: project.get("Status") || null,
      order: project.get("Order") || null,
    };
  });

  return {
    props: {
      projects,
    },
  };
}
export default function Projetos({ projects }) {
  return (
    <Page title="Projetos">
      <Center as="section" h={{ base: "100%", xl: "75vh" }}>
        <SimpleGrid
          templateColumns={{ base: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
          my={4}
          justify="center"
          spacing={12}
        >
          {projects
            .filter((projects) => projects.status)
            .map((projects, index) => (
              <Card
                key={index}
                link={projects.link}
                title={projects.name}
                image={projects.image}
                alt={projects.name}
              />
            ))}
        </SimpleGrid>
      </Center>
    </Page>
  );
}
