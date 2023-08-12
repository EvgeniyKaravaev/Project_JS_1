
"use strict"

let numberOfFilms;

function start () {

    numberOfFilms = +prompt("Укажите количество фильмов которые вы смотрели","");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt("Укажите количество фильмов которые вы смотрели","");

    }
}

start();

const personalMovie = {

    count: numberOfFilms,

    movies: {},

    actors: {},

    genres: [],

    private: false

};

function rememberMyMovies () {

    for (let i = 0; i < 2; i ++) {
    
        const oneQuestion = prompt('Введите один из последних просмотренных фильмов?','').trim(),
        
        twoQuestion = +prompt('Какую оценку поставите фильму?','');
    
        if (oneQuestion != null && twoQuestion != null && oneQuestion != '' && twoQuestion != '' && oneQuestion.length < 30) {
            
            personalMovie.movies[oneQuestion] = twoQuestion;
    
        } else {
    
            console.log('Ошибка ввода данных!');
    
            i --;
    
        }
    }
}

rememberMyMovies();

function detectedPersonalLevelMovies () {

    if (personalMovie.count < 10) {

        console.log('Вы просмотрели мало фильмов!');
    
    } else if (personalMovie.count >= 10 && personalMovie.count < 35) {
    
        console.log('Вы любитель кинематографа!');
    
    } else if (personalMovie.count >= 30 && personalMovie.count < 55) {
    
        console.log('Вы киноман!');
    
    } else {
    
        console.log('Ошибка');
    }    
}

detectedPersonalLevelMovies();

function showMyPersonalMovie (hidden) {

    if (!hidden) {

        console.log(personalMovie);

    }
}

showMyPersonalMovie(personalMovie.private);

function writeYourGenres () {

    for (let i = 1; i <= 3; i ++) {

        personalMovie.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

    }
}

writeYourGenres();

