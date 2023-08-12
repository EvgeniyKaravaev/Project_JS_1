
"use strict"

const numberOfFilms = +prompt("Укажите количество фильмов которые вы смотрели","");

const personalMovie = {

    count: numberOfFilms,

    movies: {},

    actors: {},

    genres: [],

    private: false

};

const oneQuestion = prompt('Введите один из последних просмотренных фильмов?',''),
    
      twoQuestion = +prompt('Какую оценку поставите фильму?',''),

      treeQuestion = prompt('Введите один из последних просмотренных фильмов?',''),

      fourQuestion = +prompt('Какую оценку поставите фильму?','');

      personalMovie.movies[oneQuestion] = twoQuestion;

      personalMovie.movies[treeQuestion] = fourQuestion;

      console.log(personalMovie);

