var city = 'Parga';

switch (city) {
    case 'Beograd':
    case 'Pozarevac':
    case 'Smederevo':
    case 'Kikinda':
    case 'Valjevo':
        console.log('City is in Serbia');
        break;
    case 'Berlin':
    case 'Bon':
    case 'Frankfurt':
    case 'Munchen':
        console.log('City is in Germany');
        break;
    case 'Podgorica':
    case 'Niksic':
    case 'Tivat':
        console.log('City is in Montenegro');
        break;

    case 'Athens':
    case 'Parga':
        console.log('City is in Greece');
        break;
    case 'London':
        console.log('City is in Great Britain');
        break;
    default: console.log('Please choose a different city');
}

var a = 3, b = 0, op = 'div'

switch (op) {
    case 'div':
        if (b == 0) console.log("Please choose another number for b");
        else console.log('a div b equals ' + a / b);
        break;
    case 'sum':
        console.log('a sum b equals ' + a + b);
        break;
    case 'sub':
        console.log('a sub b equals ' + a - b);
        break;
    case 'multi':
        console.log('a multiplied by b equals ' + a * b);
        break;
    default: console.log('Input valid operand denotation');

}