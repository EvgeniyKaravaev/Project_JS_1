
"use strict"

const numberOfFilms = +prompt("Укажите количество фильмов которые вы смотрели","");

const personalMovie = {

    count: numberOfFilms,

    movies: {},

    actors: {},

    genres: [],

    private: false

};

for(let i = 0; i < 2; i ++){
    
    const oneQuestion = prompt('Введите один из последних просмотренных фильмов?',''),
    
    twoQuestion = +prompt('Какую оценку поставите фильму?','');

    if (oneQuestion != null && twoQuestion != null && oneQuestion != '' && twoQuestion != '' && oneQuestion.length < 30){
        
        personalMovie.movies[oneQuestion] = twoQuestion;

    } else {

        console.log('Ошибка ввода данных!');

        i --;
        
    }

}

console.log(personalMovie);

