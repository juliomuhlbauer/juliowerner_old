import { Img } from "@chakra-ui/image";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/layout";
import Animation from "@/components/Animation";

export default function Links({ links }) {
  return (
    <Box as="section" my={4} w="100%">
      <Animation>
        <Box my={8}>
          <Heading my={2} fontWeight="extrabold" fontSize="5xl" color="jw.500">
            Links
          </Heading>
          <Divider />
        </Box>
      </Animation>

      <Stack display="block" spacing={2}>
        {links.map((link) => (
          <Animation key={link.id}>
            <Link
              _hover={{
                bgColor: "rgba(244, 88, 49, 0.1)",
                // textDecoration: "underline",
              }}
              role="group"
              p={1}
              // m={2}
              borderRadius="md"
              href={link.properties.Link?.url}
              isExternal
              color="jw.500"
            >
              <HStack spacing={4}>
                <Img
                  maxW="86px"
                  w="100%"
                  src={link.properties.Image.rich_text[0]?.text.content}
                  alt={link.properties.Name.title[0]?.plain_text + "Image"}
                  borderRadius="xl"
                />
                <Stack>
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl" }}
                    _groupHover={{ textDecoration: "underline" }}
                  >
                    {link.properties.Name.title[0]?.plain_text}
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} color="gray.200">
                    {link.properties.Description.rich_text[0]?.text.content}
                  </Text>
                </Stack>
              </HStack>
            </Link>
          </Animation>
        ))}
      </Stack>
    </Box>
  );
}
