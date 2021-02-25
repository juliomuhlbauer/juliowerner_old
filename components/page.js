import Head from "next/head";
import Nav from "components/nav";
import Animation from "components/animation";
import { Box, Center, useColorModeValue } from "@chakra-ui/react";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>{props.title} | Júlio Werner</title>
        <link
          rel="icon"
          href="/Logo Black.svg"
          media="(prefers-color-scheme:no-preference)"
        />
        <link
          rel="icon"
          href="/Logo Black.svg"
          media="(refers-color-scheme:light)"
        />
        <link
          rel="icon"
          href="/Logo White.svg"
          media="(prefers-color-scheme:dark)"
        />
      </Head>
      <Center>
        <Box
          mb={{ base: 32, md: 0 }}
          w={{ base: "90vw", lg: "85vw", xl: "60vw" }}
          maxW="100%"
        >
          <Nav>{props.title} </Nav>

          <Animation>{props.children}</Animation>
        </Box>
      </Center>
    </>
  );
}
