//practicals-extra (8.-11.) (20-02-2018)

//8. Write a function that calculates a number of days to your birthday.

function daysToBirthday(date) {
    var bDay = new Date(date);
    var today = new Date();
    bDay.setFullYear(today.getFullYear());
    if (bDay - today < 0) {
        bDay.setFullYear(2019);
    }
    var m = Math.ceil((bDay - today) / (24 * 60 * 60 * 1000));
    return m + ' day(s) to birthday!';
}

//9. Write a function that for a given departure and arrival time calculates the time the trip takes.

function tripTime(d, a) {
    d = d.split(':');
    a = a.split(':')
    var dep = new Date();
    dep.setHours(d[0], d[1], d[2])
    var arr = new Date();
    arr.setHours(a[0], a[1], a[2]);
    var int = arr - dep;
    var h, m, s;
    h = Math.floor(int / 1000 / 60 / 60);
    m = Math.floor((int - h *3600000) / 1000 / 60);
    s = Math.floor((int - h*3600000 - m*60000)/1000);
    return h + ' hours ' + m + ' minutes ' + s + ' seconds';
}

console.log(tripTime('8:22:13', '11:43:22'));

//10.a Write a constructor function that creates points in the space. Each point in the space has its own x, y, and z coordinate. For example, (3, 5, 1) can the point in the space.

function Point(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

//10.b Write a function that calculates the distance between two points in the space. 

function distance(p1, p2) {
    var distance;
    distance = Math.sqrt(Math.pow((p1.x-p2.x), 2) + Math.pow((p1.y-p2.y), 2) + Math.pow((p1.z-p2.z), 2));
    return distance;
}

console.log(distance(new Point(3,5,1), new Point(4,6,1)));

//11.a Write a function that generates a random integer value between 5 and 20.

function random5to10() {
    return 5*Math.random() +5;
}

//11.b Write a function that generates a random integer value between 50 and 100.

function random50to100() {
    return 50*Math.random() +50;
}

//11.c Write a function which expects a number and a callback factory function and returns an array of numbers produced by the factory function.
 function factory(n, callback) {
     var res = [];
     for (var i = 0; i < n; i++) {
        res.push(parseInt(callback()));
     }
     return res;
 }

 console.log(factory(5, random50to100));