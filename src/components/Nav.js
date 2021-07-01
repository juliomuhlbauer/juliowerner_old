import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { Box, Container, Flex, Link, Spacer, Text } from "@chakra-ui/layout";
import { Links } from "@/data/links";
import NextLink from "next/link";
import { useToken } from "@chakra-ui/system";
import PageProgress from "@/components/Progress";

export default function Nav({ target }) {
  const [jw500] = useToken("colors", ["jw.500"]);
  const [gray800] = useToken("colors", ["gray.800"]);

  return (
    <Box
      zIndex="modal"
      as="nav"
      pos="sticky"
      top={0}
      style={{
        backdropFilter: "saturate(100%) blur(12px)",
        backgroundColor: `${gray800}99`,
      }}
    >
      <Container maxW="container.lg">
        <Flex align="center" py={2}>
          <NextLink href="/" passHref>
            <Link
              borderRadius="md"
              _hover={{
                bgColor: `${jw500}25`,
              }}
              p={2}
            >
              <Img
                _hover={{
                  cursor: "pointer",
                }}
                alt="Logo JW"
                src="/Logo.svg"
                h={{ base: "40px", md: "52px" }}
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
      </Container>
      <PageProgress target={target} />
    </Box>
  );
}
