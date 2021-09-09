import { Image } from "@/components/Image";
import NextImage from "next/image";

export default function Teste() {
  return (
    <NextImage
      width="1000px"
      height="1000px"
      src="/Picture.png"
      alt="My photo"
      placeholder="blur"
    />
  );
}
