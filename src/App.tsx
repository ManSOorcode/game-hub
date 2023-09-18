// import './App.css'
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";
import GenresList from "./components/genres/GenresList";
import { useState } from "react";
import { Genre } from "./hook/useGenres";
import PlatformSelector from "./components/platformSelector/PlatformSelector";

function App() {
  const [selectedGenre, setSelectGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenresList
            selectedGenre={selectedGenre}
            onSelectGenre={(gener) => setSelectGenre(gener)}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <PlatformSelector />
        <GameGride selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
