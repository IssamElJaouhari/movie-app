import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css'
function App() {
  const [movies, setMovies] = useState([

    {
      id: 2,
      title: 'وجع التراب - wja3 trab',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_pdgoM_MbitZmqYEd0w3nHysEpfd492sMQ&usqp=CAU',
      rating: 9.2,
    },
    {
      id: 3,
      title: 'Breaking Bad',
      description: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future",
      posterURL: 'https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg',
      rating: 9.0,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (filter) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        movie.rating >= filter.rating
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <form onSubmit={(event) => {
          event.preventDefault();
          const newMovie = {
            id: movies.length + 1,
            title: event.target.title.value,
            description: event.target.description.value,
            posterURL: event.target.posterURL.value,
            rating: parseFloat(event.target.rating.value),
          };
          handleAddMovie(newMovie);
        }}>
          <label>
            Title:
            <input type="text" name="title" required />
          </label>
          <label>
            Description:
            <textarea name="description" required></textarea>
          </label>
          <label>
            Poster URL:
            <input type="url" name="posterURL" required />
          </label>
          <label>
            Rating:
            <input type="number" min="0" max="10" step="0.1" name="rating" required />
          </label>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
}

export default App;
