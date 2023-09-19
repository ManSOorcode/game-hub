import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
  //Games
  //Xbox Games
  //Action Games
  //Xbox Action Games

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};

export default GamesHeading;
