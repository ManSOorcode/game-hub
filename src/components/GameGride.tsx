import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GamesCards from "./GamesCards";
import GamesCardSkeleton from "./GamesCardSkeleton";

// import totalGames from "../assets/extra-data";

import useExtraData from "../assets/useExtraData";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGride = ({ gameQuery }: Props) => {
  const { isLoading, data, error } = useGames(gameQuery);
  const { totalGames } = useExtraData();

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={"10px"}
      spacing={6}
    >
      {isLoading &&
        totalGames.map((totalGame) => <GamesCardSkeleton key={totalGame.id} />)}
      {data.map((game) => (
        <GamesCards key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGride;
