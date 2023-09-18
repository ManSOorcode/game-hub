import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hook/useGenres";
import getCroppedImagesUrl from "../../services/image-crops";
import GenresCardSkeleton from "./GenresCardSkeleton";
import useExtraData from "../../assets/useExtraData";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
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
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant={"link"}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
