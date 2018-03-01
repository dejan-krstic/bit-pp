function Movie(t, d, g) {
    this.title = t;
    this.duration = parseInt(d);
    this.genre = g;
}
Movie.prototype.getData = function () {
    var genreShort = (this.genre[0]+this.genre[this.genre.length-1]).toUpperCase();
    return this.title + ', '+ this.duration + 'min, '+ genreShort;  
}
Array.prototype.hasElement = function(obj) {
    var marker = false;
    this.forEach(function(item) {
        if (JSON.stringify(item) == JSON.stringify(obj)) {
            marker = true;
        }
    });
    return marker;
}