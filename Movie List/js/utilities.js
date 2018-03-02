function validateData(t, d, g) {
    if (!t) {
        err.textContent = 'Title is required!';
        err.style.visibility = 'visible';
    } else if (!d || (parseInt(d) <= 0)) {
        err.textContent = 'Check the movie length!';
        err.style.visibility = 'visible';
    } else if (g == '-') {
        err.textContent = 'Choose genre of the movie!';
        err.style.visibility = 'visible';
    } else {
        err.style.visibility = 'hidden';
        return true;
    }
    return false;
}
function validateProgram(d) {
    if (!d) {
        err2.textContent = 'Please enter date!';
        err2.style.visibility = 'visible';
    } else {
        err2.style.visibility = 'hidden';
        return true;
    }
    return false;
}
function validateAdding(movie, program) {
    if (movie == '-' || program == '-') {
        err3.style.visibility = 'visible';
        err3.textContent = 'Choose movie and/or program!'
    } else {
        return true;
    }
    return false;
}
function updateList() {

    var liNode = document.createElement('li');
    var liText = document.createTextNode(movieList[i].getData());

    liNode.appendChild(liText);
    liNode.innerHTML += ' <input type="button" value="X" id=i' + i + '>';
    ul.appendChild(liNode);
    selectM.appendChild(updateSelect(liText));
    var clearX = document.querySelector('#i' + i);

    clearX.addEventListener('click', function (event) {
        var index = parseInt(event.target.id.substring(1));
        duration -= movieList[index].duration;
        movieList.splice(index, 1);
        i--;
        clearLi(index);
    });
}


function updateProgramList() {
    var liNode = document.createElement('li');
    // var liText = document.createTextNode(programList[i].getData());
    liNode.appendChild(document.createTextNode(programList[k].getData()));
    ulProgram.appendChild(liNode);
    selectP.appendChild(updateSelect(document.createTextNode(programList[k].getData())));
    k++;


    // var clearX = document.querySelector('#iP' + i);
    // todo X on program list
    // liNode.innerHTML += ' <input type="button" value="X" id=iP' + i + '>';
    /* clearX.addEventListener('click', function (event) {
        var index = parseInt(event.target.id.substring(1));
        // duration -= movieList[index].duration;
        programList.splice(index, 1);
        i--;
        clearLi(index);
    }); */
}

function updateSelect(item) {
    var optionNode = document.createElement('option');
    optionNode.appendChild(item);
    return optionNode;
};


function updateCounter() {
    span.textContent = duration + 'min';
}
function clearLi(j) {
    var wantedLi = ul.children[j];
    wantedLi.parentNode.removeChild(wantedLi);
    for (var c = movieList.length - 1; c >= j; c--) {
        var k = ul.children[c].lastElementChild;
        k.id = 'i' + (parseInt(k.id.substring(1)) - 1);
    }
}
function fetchData() {
    var movieTitle = document.querySelector('#title');
    var movieLength = document.querySelector('#length');
    var movieGenre = document.querySelector('#genre');
    if (validateData(movieTitle.value, movieLength.value, movieGenre.value)) {
        inputList[i] = new Movie(movieTitle.value, movieLength.value, movieGenre.value);
        reset(movieTitle, movieLength, movieGenre);
        return inputList[i];
    }
    return {};
}

function fetchProgram() {
    var programDate = document.querySelector('#date');
    if (validateProgram(programDate.value)) {
        inputProgramList[l] = new Program(programDate.value);
        resetProgram(programDate); //<---
        return inputProgramList[l];
    } return {};

}

function fetchAdding() {
    var movie = document.querySelector('#movies');
    var program = document.querySelector('#programs');
    var mIndex;
    var pIndex;
    if (validateAdding(movie.value, program.value)) {
        
        programList.forEach(function (p, g) {
            if (p.getData() == program.value) {
                pIndex = g;
            }
        });
        movieList.forEach(function (m, g) {
            if (m.getData() == movie.value) {
                mIndex = g;
            }
        });
        return [mIndex, pIndex];

    }
    return [];
}
function reset(a, b, c) {
    a.value = '';
    b.value = '';
    c.value = '-';
}
function resetProgram(a) {  //<---
    a.value = '';
}
function addMovie(obj) {
    movieList.push(obj);
    updateList();
    //TODO add movie to select in program div
}

function addProgram(obj) {
    programList.push(obj);
    updateProgramList();

}

function addMovieToProgram(movie, program) {
    program.movieList.push(movie);
    k++;
}


