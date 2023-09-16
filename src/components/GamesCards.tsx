import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

import { Game } from "../hook/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GamesCards = ({ game }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Card
      overflow={"hidden"}
      borderRadius={10}
      boxShadow={colorMode == "dark" ? "base" : "xl"}
    >
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GamesCards;
