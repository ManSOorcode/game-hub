import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

import { Game } from "../hook/useGames";

interface Props {
  game: Game;
}

const GamesCards = ({ game }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Card overflow={"hidden"} borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GamesCards;
