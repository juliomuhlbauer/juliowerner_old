import { Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useRouter } from "next/router";

const isServerReq = (req) => !req.url.startsWith("/_next");

export async function getServerSideProps({ req }) {
  const res = isServerReq(req)
    ? await fetch("https://api.github.com/users/julio-werner")
    : null;
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
