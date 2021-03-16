import NextImage from "next/image";
import { chakra, Image as ChakraImage, Img } from "@chakra-ui/react";

const Image = chakra(ChakraImage, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout", "objectFit"].includes(prop),
});

export default Img;
