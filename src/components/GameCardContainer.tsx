import { Box, useColorMode } from "@chakra-ui/react";
import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      boxShadow={colorMode == "dark" ? "base" : "xl"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
