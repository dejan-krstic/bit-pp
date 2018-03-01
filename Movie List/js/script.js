var add = document.querySelector('#add');
var err = document.querySelector('#error');
var movieList = [];
var inputList = [];
var i = 0;
var j = 0;
var ul = document.querySelector('ul');
//  var span = document.querySelector('#counter');
var duration = 0;




add.addEventListener('click', function (event) {
    var input = fetchData();
    if (!movieList.hasElement(input) && (JSON.stringify(input) != JSON.stringify({}))) {
        addMovie(input);
    }
    

});
