import { Image } from "@/components/Image";
import NextImage from "next/image";

import Picture from "public/Picture.png";

export default function Teste() {
  return (
    <NextImage
      width="1000px"
      height="1000px"
      src={Picture}
      alt="My photo"
      placeholder="blur"
    />
  );
}
