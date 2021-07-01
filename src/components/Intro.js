import { Center, Heading } from "@chakra-ui/layout";
import Animation from "./Animation";

export default function Intro() {
  return (
    <Center minH="100vh" as="section" id="intro">
      <Animation>
        <Heading
          textAlign="center"
          fontSize="8xl"
          bgGradient="linear(to-r, jw.600, jw.100)"
          bgClip="text"
          fontWeight="black"
        >
          Júlio <br /> Werner
        </Heading>
      </Animation>
    </Center>
  );
}
