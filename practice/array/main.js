var data = require("./data.js");

function filterMoviesByYear(movies, year) {
  return movies.movies.filter(function (item) {
    return item.year == year;
  });
}

// console.log(filterMoviesByYear(data, 2014));


function filterMoviesByGenre(movies, genre) {
  return movies.movies.filter(function (item) {
    return item.genres.indexOf(genre) > -1;
  });
}

// console.log(filterMoviesByGenre(data, "Comedy"));


function sortMoviesByYear(movies) {
  return movies.movies.sort(function (a, b) {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
  });
}

// console.log(sortMoviesByYear(data));

function sortMoviesByName(movies) {
  return movies.movies.sort(function (a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
}

// console.log(sortMoviesByName(data));

function getDescriptionFor(movie) {
  return (movie.title + "\n" + movie.plot + "\n" + movie.runtime + "\n" + movie.genres);
}

// console.log(getDescriptionFor(data.movies[4]));