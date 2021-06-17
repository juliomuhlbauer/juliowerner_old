import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { Flex, Link, Spacer } from "@chakra-ui/layout";
import { Links } from "@/data/links";
import NextLink from "next/link";

export default function Nav() {
  return (
    <Flex as="nav" m="auto" align="center" px={8} py={2}>
      <NextLink href="/" passHref>
        <Link
          borderRadius="md"
          _hover={{
            bgColor: "rgba(244, 88, 49, 0.1)",
          }}
        >
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
        </Link>
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
