import { Box, Progress, useColorModeValue, useToken } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const PageProgress = ({ target }) => {
  const [jw500] = useToken("colors", ["jw.500"]);

  const [readingProgress, setReadingProgress] = useState(0);

  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <Progress
      h={0.5}
      colorScheme="jw"
      value={readingProgress}
      //   transition="all 0.10s"
      //   transition-timing-function="spring(1 100 10 10)"

      bg={`${jw500}25`}
    />
  );
};

export default PageProgress;
