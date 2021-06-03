import { Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/julio-werner");
  const data = await res.json();

  return {
    props: res
      ? {
          data,
        }
      : {},
  };
}

export default function Teste({ data }) {
  const router = useRouter();
  const { isFallback } = router;

  return (
    <>
      {isFallback ? (
        <Skeleton>
          <Text>teste</Text>
        </Skeleton>
      ) : (
        <Text>{data.login}</Text>
      )}
    </>
  );
}
