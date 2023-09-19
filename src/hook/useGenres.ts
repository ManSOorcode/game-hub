import useData from "./useData";
import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//by this genre will not loade presenting content to website will reduce
// const useGenres = () => ({ data: genre, isLoading: false, error: null });

//we comment out becuse reducing imapact of this hook(useGenres) on consumer hook(GenresList)👇
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
