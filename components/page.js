import Head from "next/head";
import Nav from "components/nav";
import Animation from "components/animation";
import { Box, Center } from "@chakra-ui/react";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>{props.title} | Júlio Werner</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Nav>{props.title} </Nav>
      <Center as="main">
        <Box w="90vw" maxW="100%">
          <Animation>{props.children}</Animation>
        </Box>
      </Center>
    </>
  );
}
