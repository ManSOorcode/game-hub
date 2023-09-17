import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../../hook/useGenres";
import getCroppedImagesUrl from "../../services/image-crops";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
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
