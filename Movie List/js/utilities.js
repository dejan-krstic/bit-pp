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
function updateList() {
    var liNode = document.createElement('li');
    var liText = document.createTextNode(movieList[i].getData());
    liNode.appendChild(liText);
    liNode.innerHTML += ' <input type="button" value="X" id=i' + i + '>';
    ul.appendChild(liNode);
    var clearX = document.querySelector('#i' + i);
    clearX.addEventListener('click', function (event) {
        var index = parseInt(event.target.id.substring(1));
        duration -= movieList[index].duration;
        movieList.splice(index, 1);
        i--;
        clearLi(index);
    });
}
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
        input = new Movie(movieTitle.value, movieLength.value, movieGenre.value);
        reset(movieTitle, movieLength, movieGenre);
        return input;
    }
    return {};
}

function reset(a, b, c) {
    a.value = '';
    b.value = '';
    c.value = '-';
}
function addMovie(obj) {
    movieList.push(obj);
    updateList();
    //TODO add movie to select in program div
}