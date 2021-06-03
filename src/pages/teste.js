import { Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

let projects = {
  loaded: false,
};

export default function Teste() {
  return (
    <Skeleton isLoaded={projects.loaded}>
      <Text>dsajljdasljk</Text>
    </Skeleton>
  );
}
