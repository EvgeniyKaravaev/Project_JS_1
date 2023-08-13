
"use strict"

const personalMovie = {

    count: 0,

    movies: {},

    actors: {},

    genres: [],

    private: false,

    start: () => {

        personalMovie.count = +prompt("Укажите количество фильмов которые вы смотрели","");
    
        while (personalMovie.count == '' || personalMovie.count == null || isNaN(personalMovie.count)) {
    
            personalMovie.count = +prompt("Укажите количество фильмов которые вы смотрели","");
    
        }
    },

    rememberMyMovies: () => {

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
    },

    detectedPersonalLevelMovies: () => {

        if (personalMovie.count < 10) {
    
            console.log('Вы просмотрели мало фильмов!');
        
        } else if (personalMovie.count >= 10 && personalMovie.count < 35) {
        
            console.log('Вы любитель кинематографа!');
        
        } else if (personalMovie.count >= 30 && personalMovie.count < 55) {
        
            console.log('Вы киноман!');
        
        } else {
        
            console.log('Ошибка');
        }    
    },

    showMyPersonalMovie: (hidden) => {

        if (!hidden) {
    
            console.log(personalMovie);
    
        }
    },

    showVisibleMyPersonalMovies: () => {

        if (personalMovie.private){

            personalMovie.private = false;

        } else {

            personalMovie.private = true;

        }

    }, 

    writeYourGenres: () => {

        for (let i = 1; i < 2; i++) {

            let genres = prompt(`Ввведите ваши любимые жанры через запятую!`).toLocaleLowerCase();

            if (genres === '' || genres == null) {

                console.log('Вы не ввели данные или некорректно ввели данные!');

                i--;

            } else {

                personalMovie.genres = genres.split(', ');

                personalMovie.genres.sort();

            }
        }

        personalMovie.genres.forEach((item, i) => {

            console.log(`Любимый жанр - ${i + 1} - это ${item}`);

        });

    }

};


