import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { Flex, Link, Spacer } from "@chakra-ui/layout";
import { Links } from "@/data/links";
import NextLink from "next/link";

export default function Nav() {
  return (
    <Flex as="nav" m="auto" maxW="4xl" align="center" px={4}>
      <NextLink href="/">
        <Img
          _hover={{
            cursor: "pointer",
          }}
          alt="Logo JW"
          src="/Logo.svg"
          htmlWidth="100px"
          w="100px"
          objectFit="contain"
        />
      </NextLink>
      <Spacer />
      <ButtonGroup spacing={6} size="lg">
        {Links.map((Links, index) => (
          <IconButton
            colorScheme="jw"
            variant="ghost"
            key={index}
            as={Link}
            href={Links.link}
            isExternal
            icon={Links.icon}
          />
        ))}
      </ButtonGroup>
    </Flex>
  );
}
