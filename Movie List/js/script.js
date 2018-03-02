var add = document.querySelector('#add');
var err = document.querySelector('#error1');
var err2 = document.querySelector('#error2')
var err3 = document.querySelector('#error3');
var addp = document.querySelector('#addprogram');
var addmtp = document.querySelector('#addmtop');
var selectM = document.querySelector('#movies');
var selectP = document.querySelector('#programs');
var movieList = [];
var inputList = [];
var programList = [];
var inputProgramList = [];
var i = 0;
var l = 0;
var k = 0;
var ul = document.querySelector('ul');
var ulProgram = document.querySelector('#movieProgram');
//  var span = document.querySelector('#counter');
var duration = 0;




add.addEventListener('click', function (event) {
    var input = fetchData();
    
    if (!movieList.hasElement(input) && (JSON.stringify(input) != JSON.stringify({}))) {
        addMovie(input);
    }
    i++ //<---


});
addp.addEventListener('click', function (event) {
    var input = fetchProgram();
    if (!programList.hasElement(input) && (JSON.stringify(input) != JSON.stringify({}))) {
        addProgram(input);
    } else {
        err2.style.visibility = "visible";
        err2.textContent = "Program already exists!";
    }
    l++  //<---
});

addmtp.addEventListener('click', function (event) {
    var input = fetchAdding();
    var movie = movieList[input[0]];
    var program = programList[input[1]];
    if (program.movieList.hasElement(movie)) {
        err3.textContent = movie.name + ' is already added to this program. Choose another movie!';
        err3.style.visibility = 'visible';
    } else {
        addMovieToProgram(movie, program);
    }
});
