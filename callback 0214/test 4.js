function f(name, surname){
    return function(){
        console.log(name+'+'+surname+'@bitmail.com');
    }
}

f('andjelka','tamara')();

var r=f('andja','tamara');
r();