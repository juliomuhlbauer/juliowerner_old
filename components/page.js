import Head from "next/head";
import Nav from "components/nav";
import Animation from "components/animation";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>{props.title} | Júlio Werner</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Animation>
        <Nav>{props.title} </Nav>
        {props.children}
      </Animation>
    </>
  );
}
