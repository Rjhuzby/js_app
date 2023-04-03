const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: [],
    privat: false
};


const oneOfLastFilms = prompt('Один из последних просмотренных фильмов?', ''),
      filmScore = +prompt('На сколько оцените его?',''),
      oneOfLastFilms_2 = prompt('Один из последних просмотренных фильмов?', ''),
      filmScore_2 = +prompt('На сколько оцените его?','');


personalMovieDB.movies [oneOfLastFilms] = filmScore;
personalMovieDB.movies [oneOfLastFilms_2] = filmScore_2;

console.log(personalMovieDB)


