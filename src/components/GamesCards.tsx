import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

import { Game } from "../hook/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GamesCards = ({ game }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Card
      overflow={"hidden"}
      borderRadius={10}
      boxShadow={colorMode == "dark" ? "base" : "xl"}
    >
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GamesCards;
