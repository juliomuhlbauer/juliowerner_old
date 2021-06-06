import { Text } from "@chakra-ui/layout";

export async function getServerSideProps() {
  const response = await fetch("https://api.github.com/users/julio-werner");
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}

export default function Teste({ data }) {
  console.log(data);
  return <Text>{data.login}</Text>;
}
