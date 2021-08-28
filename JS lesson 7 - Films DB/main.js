let numberOfFilms;

start();

console.log(numberOfFilms);

const personalMovieDB = {
    count:numberOfFilms, //=========================считается undefined. Почему?========//
    movies:{ 
        toString: function(){
            let moviesList = '';
            for(let key in this){
                if(typeof this[key] != 'function'){
                    moviesList += `'${key}': ${this[key]}\n`;//==========================Строка для вывода всех данных по фильмам========//
                }
            }
            return moviesList;
        }
    },  // {'Titanic': 8.8, 'Hattika' : 9.4}
    genres:[],
    private: false,
    sayHello: function(){
        alert('Hello!')
    },
    getMovieData: function(filmsNumber){
        for(let i=0; i<filmsNumber; i++){
            const title = prompt('Enter the title of last watched movie'),
                rate = parseFloat(prompt('How do you rate it?'));
                console.log(rate)
            if(title != null && title != '' && rate != null && rate !=''&& !isNaN(rate) ){
                personalMovieDB.movies[title] = rate;
            }else{
                alert('write correct data')
                i--;
            }
        }
    },
    getGenre: function(number){
        for (let i = 1; i <= number; i++){
            this.genres[i-1] = prompt(`What is your top-${number} genre?`)
        }
    },
    showMovieDB: function(){
        if(!this.private){
            //console.log(personalMovieDB);
            alert(`You did watched: ${this.count} films`);
            for(let key in personalMovieDB.movies){ 
                alert(`You saved film: '${key}' has rate ${this.movies[key]}`)
            }
            alert(`You favorite genre: ${this.genres}`);
            alert(this.levelScoreMessage());
        }
    },
    levelScoreMessage: function(){
        if(this.count < 5){
            return 'don\'t like movies?'
        }else if(this.count >=5 && this.count <=15){
            return 'you are classic viewer\u{1F60D}'
        }else if (this.count > 15 && this.count<=30){
            return 'you\'re a movie buff!';
        }else{
            return 'error'
        }
    }
}

function start(){
    do{
    numberOfFilms = +prompt('How many films did you watch last month?')
    }while(isNaN(numberOfFilms));
    return numberOfFilms;
}

console.log(personalMovieDB.count);

/*personalMovieDB.sayHello();
personalMovieDB.getGenre(3);
personalMovieDB.getMovieData(3);
personalMovieDB.showMovieDB();
*/
