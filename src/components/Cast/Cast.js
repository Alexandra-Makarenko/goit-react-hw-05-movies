import { useParams } from "react-router-dom";
import { getFilmCast } from "api";
import { useState, useEffect, useCallback } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 
   const fetchFilms = useCallback(async () => {
  try {
    setIsLoading(true);
    const film = await getFilmCast(movieId);
    setFilm(film);
  } catch {
    setError('Failed to load film :(');
  } finally {
    setIsLoading(false);   
  }
}, [movieId]);

useEffect(() => {
    fetchFilms();
 }, [fetchFilms]);
    // const cast = fetchFilms();
    
  return (
      <main>
          <h1>Cast</h1>
     <div>
      {film.map((cast) => (
                    <div key={cast.id}
               > <li>{cast.name}</li></div>
                ))}
    </div>
    </main>
  );
};
export default Cast;