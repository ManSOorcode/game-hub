import { Heading, useColorMode } from "@chakra-ui/react";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
  //Games
  //Xbox Games
  //Action Games
  //Xbox Action Games
  const { toggleColorMode, colorMode } = useColorMode();

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading
      color={colorMode === "dark" ? "teal.400" : "green.700"}
      marginY={5}
      fontSize={"5xl"}
      as="h1"
    >
      {heading}
    </Heading>
  );
};

export default GamesHeading;
