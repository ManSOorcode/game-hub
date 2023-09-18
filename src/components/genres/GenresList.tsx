import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../../hook/useGenres";
import getCroppedImagesUrl from "../../services/image-crops";
import GamesCardSkeleton from "../GamesCardSkeleton";
import GenresCardSkeleton from "./GenresCardSkeleton";
import ExtraData from "../../assets/useExtraData";
import useExtraData from "../../assets/useExtraData";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  // if (isLoading) return <Spinner />;

  const { totalGenres } = useExtraData();

  if (error) return null;

  return (
    <List>
      {isLoading &&
        totalGenres.map((totalGenre) => (
          <GenresCardSkeleton key={totalGenre.id} />
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImagesUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
