import { Divider, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Knowlodge from "@/components/knowlodge";
import Page from "@/components/page";
import { KnowlodgeData } from "@/data/about";
import Image from "@/components/image";

function Title(props) {
  return (
    <>
      <Heading as="h3" my={4} fontSize="3xl" fontWeight="500">
        {props.title}
      </Heading>
      <Divider />
    </>
  );
}

function KnowlodgeSection(props) {
  return (
    <SimpleGrid my={8} templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
      {props.children}
    </SimpleGrid>
  );
}

export default function Sobre() {
  return (
    <Page title="Sobre">
      <Stack
        spacing={8}
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Text fontSize="2xl" fontWeight="700">
          Olá, me chamo Júlio Werner. Tenho 18 anos e moro em São Paulo.
          <br /> <br /> Sou designer, programador e, de vez em quando,
          empreendedor. <br /> <br /> Atualmente estou estudando Administração
          de Empresas no IMT - Instituto Mauá de Tecnologia.
        </Text>

        <Image
          borderRadius="lg"
          htmlWidth="250px"
          htmlHeight="250px"
          boxSize={{ base: "350px", md: "400px" }}
          src="/Picture.png"
        />
      </Stack>
      <Text
        my={8}
        w={{ base: "100%", md: "50%" }}
        fontSize="3xl"
        fontWeight="700"
      >
        Aqui estão alguns dos meus conhecimentos:
      </Text>
      {KnowlodgeData.map((KnowlodgeData) => (
        <>
          <Title title={KnowlodgeData.title} />
          <KnowlodgeSection>
            {KnowlodgeData.items.map((KnowlodgeData) => (
              <Knowlodge
                image={KnowlodgeData.image}
                value={KnowlodgeData.value}
                icon={KnowlodgeData.icon}
                text={KnowlodgeData.text}
              />
            ))}
          </KnowlodgeSection>
        </>
      ))}
    </Page>
  );
}
