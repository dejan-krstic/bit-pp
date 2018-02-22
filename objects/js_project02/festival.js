'use strict';


(function () {
    console.log('Hi! We did it!');

    //constructor function genre  
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            return (this.name.substring(0, 1) + this.name.substring(this.name.length - 1)).toUpperCase();
        }
    }

    //constructor function movie 
    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = parseInt(length); // must be number
        this.getData = function () {
            return this.title + ", " + this.length + "min, " + this.genre.getData();
        }
    }
    // constructor function Program
    function Program(date) {
        this.list = [];
        this.date = new Date(date);
        this.movieCount = 0;
        this.addMovie = function (movie) {
            var counter = 0;
            this.list.forEach(function (item) {
                if (item.genre == movie.genre) {
                    counter++;
                }
            });
            if (this.totalLength() + movie.length <= 480 && counter < 4) {
                this.list.push(movie);
                this.movieCount++;
            } else if (this.totalLength() + movie.length > 480) {
                console.log('Available screen time exceeded!');
            } else {
                console.log('There are already 4 movies of this genre in this program!');
            }
        };
        this.totalLength = function () {
            var k = 0;
            this.list.forEach(function (movie, i) {
                k += movie.length;

            });
            return k;
        }

        this.getData = function () {
            var s = '\t' + this.date.getDate() + ' ' + (this.date.getMonth() + 1) + ' ' + this.date.getFullYear() + ', program duration ' + this.totalLength() + 'min';
            this.list.forEach(function (movie, i) {
                s += '\n\t\t' + movie.getData();
            });
            return s;
        }
    }
    //constructor function Festival
    function Festival(name, max) {
        this.name = name;
        this.maxNumberOfMovies = parseInt(max);
        this.listOfPrograms = [];
        this.totalMovieCount = function () {
            var n = 0;
            this.listOfPrograms.forEach(function (program, i) {
                n += program.movieCount;
            });
            return n;
        }
        this.addProgram = function (program) {
            if ((this.totalMovieCount() + program.movieCount) <= this.maxNumberOfMovies) {
                this.listOfPrograms.push(program);
            } else {
                console.log('Maximum number of allowed movies exceeded!');
            }
        }
        this.getData = function () {
            if (this.listOfPrograms.length != 0) {
                var s = this.name + ' has ' + this.totalMovieCount() + ' movie titles';
                this.listOfPrograms.forEach(function (program, i) {
                    s += '\n' + program.getData();
                });
            } else {
                var s = this.name + '\n\tProgram to be announced';
            }
            return s;
        }
    }

    //genres
    var action = new Genre('Action');
    var thriller = new Genre('Thriller');
    var drama = new Genre('Drama');
    var comedy = new Genre('Comedy');


    // functions to call constructor functions (why?)

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    }

    function createProgram(date) {
        return new Program(date);
    }

    // create Festival

    var winterFest = new Festival('Winter Fest', 5);

    // movies
    var superman = createMovie('Superman 2', action, '110min');
    var thor = createMovie('Thor Ragnarok', action, 130);
    var fockers = createMovie('Meet the Fockers', comedy, 90);
    var silenceLambs = createMovie('Silence of the Lambs', thriller, 150);
    var lotr1 = createMovie('The Lord of the Rings: The Fellowship of the Ring', drama, 180);
    var lotr2 = createMovie('The Lord of the Rings: The Two Towers', drama, 180);
    var lotr3 = createMovie('The Lord of the Rings: The Return of the King', drama, 200);
    var daddyDaycare = createMovie('Daddy Day Care', comedy, '90min');

    //programs
    var winter1 = createProgram('February 23, 2018');
    winter1.addMovie(superman);
    winter1.addMovie(thor);

    var winter2 = createProgram('February 24, 2018');
    winter2.addMovie(lotr1);
    winter2.addMovie(lotr2);
    winter2.addMovie(lotr3);

    var winter3 = createProgram('February 25, 2018');
    winter3.addMovie(fockers);
    winter3.addMovie(daddyDaycare);

    // adding to festival

    winterFest.addProgram(winter1);
    winterFest.addProgram(winter2);
    winterFest.addProgram(winter3);

    //create an empty festival

    var weekendFest = new Festival('Weekend Fest', 10);

    //testing

    console.log(winterFest.getData());
    console.log(weekendFest.getData());

})();