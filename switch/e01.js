// Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message "Please choose a different city".

var city = "Bangkok";
var country;

switch ( city ) {
    case "Bangkok" :
    case "Chiang Mai" :
    case "Pattaya" :
        country = "Thailand";
        break;
    case "Berlin" :
    case "Munich" :
    case "Hamburg" :
    case "Frankfurt" :
        country = "Germany";
        break;
    case "Rio de Janeiro" :
    case "Sao Paulo" :
    case "Salvador" :
    case "Curitiba" :
    case "Brasilia" :
        country = "Brazil";
        break;
    case "Bogota" :
    case "Cartagena" :
        country = "Colombia";
        break;
    case "Stockholm" :
        country = "Sweden";
        break;
    default :
        country = "Please choose a different city";
}
console.log(country);