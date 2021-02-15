import Head from "next/head";
import Nav from "../components/nav";
import Animation from "../components/animation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre | Júlio Werner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Animation>
        <Nav>Sobre</Nav>
      </Animation>
    </>
  );
}
