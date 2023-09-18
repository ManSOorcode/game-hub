import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GamesCards from "./GamesCards";
import GamesCardSkeleton from "./GamesCardSkeleton";

// import totalGames from "../assets/extra-data";

import useExtraData from "../assets/useExtraData";
import { Genre } from "../hook/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGride = ({ selectedGenre }: Props) => {
  const { isLoading, data, error } = useGames(selectedGenre);

  //   const skeletons = game.length;
  //   console.log(skeletons);

  const { totalGames } = useExtraData();
  // console.log(data);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={3}
      >
        {isLoading &&
          totalGames.map((totalGame) => (
            <GamesCardSkeleton key={totalGame.id} />
          ))}
        {data.map((game) => (
          <GamesCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
