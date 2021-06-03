import { Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import Airtable from "airtable";

let projects = {
  loaded: false,
};

export async function getServerSideProps() {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  const records = await airtable
    .base("appG7EIhRu9l6fKVI")("Projects")
    .select()
    .all();

  let projects = records.map((project) => {
    return {
      name: project.get("Name") || null,
      image: project.get("Image") || null,
      link: project.get("Link") || null,
      status: project.get("Status") || null,
      order: project.get("Order") || null,
      color: project.get("Color") || null,
      bg: project.get("BG") || null,
      loaded: true,
    };
  });

  return {
    props: {
      projects,
    },
  };
}

export default function Teste() {
  return (
    <Skeleton isLoaded={projects.loaded}>
      <Text>{projects.name}</Text>
    </Skeleton>
  );
}
