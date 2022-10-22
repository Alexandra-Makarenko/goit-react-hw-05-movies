import { useState, useEffect,useCallback  } from 'react';
import { getTrendingFilms } from "api";
import FilmList  from "../../components/FilmList/FilmList";


const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   const fetchFilms = useCallback(async () => {
  try {
    setIsLoading(true);
    const films = await getTrendingFilms();
    setFilms(films);
  } catch {
    setError('Failed to load film :(');
  } finally {
    setIsLoading(false);   
  }
}, []);

useEffect(() => {
    fetchFilms();
}, [fetchFilms]);
  
  return (
    <main>
      {!isLoading ? <div>
        <h1>Tranding today</h1>
        <FilmList films={films} />
      </div>
        : <div>Loading films...</div>}
    </main>
  );
}
export default Home;
