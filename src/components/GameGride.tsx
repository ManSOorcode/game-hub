import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GamesCards from "./GamesCards";
import GamesCardSkeleton from "./GamesCardSkeleton";

const GameGride = () => {
  const { isLoading, games, error } = useGames();

  //   const skeletons = games.length;
  //   console.log(skeletons);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GamesCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GamesCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
