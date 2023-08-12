
"use strict"

const numberOfFilms = +prompt("Укажите количество фильмов которые вы смотрели","");

const personalMovie = {

    count: numberOfFilms,

    movies: {},

    actors: {},

    genres: [],

    private: false

};

const one = prompt('Введите один из последних просмотренных фильмов?',''),
    
      two = +prompt('Какую оценку поставите фильму?',''),

      tree = prompt('Введите один из последних просмотренных фильмов?',''),

      four = +prompt('Какую оценку поставите фильму?','');

      personalMovie.movies[one] = two;

      personalMovie.movies[tree] = four;

      console.log(personalMovie);

