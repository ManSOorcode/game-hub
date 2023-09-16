import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GamesCards from "./GamesCards";

const GameGride = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {games.map((game) => (
          <GamesCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
