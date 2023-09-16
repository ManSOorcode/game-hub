import React from "react";
import useGenres from "../../hook/useGenres";

const GenresList = () => {
  const { isLoading, genres, error } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
