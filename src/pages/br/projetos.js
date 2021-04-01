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
    .select({
      fields: ["Name", "Image", "Link"],
    })
    .all();

  const projects = records.map((project) => {
    return {
      name: project.get("Name"),
      image: project.get("Image"),
      link: project.get("Link"),
    };
  });

  return {
    props: {
      projects,
    },
    revalidate: 3600,
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
          {projects.map((projects, index) => (
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
