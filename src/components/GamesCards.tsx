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
import getCroppedImagesUrl from "../services/image-crops";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GamesCards = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card height={{ lg: "100%" }}>
        <Image src={getCroppedImagesUrl(game.background_image)} />
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
    </GameCardContainer>
  );
};

export default GamesCards;
