import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import Card from "@/components/card";
import Page from "@/components/page";
import { ServicesData } from "@/data/services";

const fetch = require("isomorphic-fetch");
fetch("https://api.sheetson.com/v2/sheets/Services", {
  headers: {
    Authorization:
      "WM5dmIz9UizqUAq20TkF7PWdFqDVNHTUxRgrAG-653sBGWNzpvP3baW3d-s",
    "X-Spreadsheet-Id": "1kTb7cNwbdQJBgSdjMxQVMk4JA4BMVwX7O64Vtl-IcNM",
  },
})
  .then((r) => r.json())
  .then((result) => console.log(result));
export default function Services() {
  return (
    <Page backLink="/" title="Services">
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
