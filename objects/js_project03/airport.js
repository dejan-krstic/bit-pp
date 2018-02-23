'use strict';
(function (){
    console.log('Hello!');

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function (){
            return this.name+ ' ' + this.surname;
        }
    }
    function Seat(number,category) {
        this.number = number || Math.ceil(10+90*Math.random());
        this.category = category || 'e';
        this.getData = function () {
            return this.number +', ' + this.category.toUpperCase();
        }
    }
    function Passenger (person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData()+', ' + this.person.getData();
        }
    }
    function Flight(relation, date){
        this.relation=relation;
        this.date = new Date(date);
        this.passengerList = [];
        this.getData = function () {
            var s = '\t\t' +this.date.getDate() + '.' +(this.date.getMonth()+1) + '.' +this.date.getFullYear() + ', '+ this.relation;
            this.passengerList.forEach(function(passenger) {
                s += '\n\t\t\t\t' + passenger.getData();
            })
            return s;
        }
        this.getDataModified = 
        this.addPassenger = function (passenger) {
            this.passengerList.push(passenger);
        }
    }
    function Airport() {
        this.name = 'Nikola Tesla';
        this.flightList = [];
        this.addFlight = function (flight) {
            this.flightList.push(flight);
        }
        this.passengerNumber = function() {
            var counter = 0;
            this.flightList.forEach(function(flight){
                counter += flight.passengerList.length;
            });
            return counter;
        }
        this.getData = function(){
            var s = 'Airport: '+ this.name + ', total passengers: '+this.passengerNumber();
            this.flightList.forEach(function(flight){
                s +='\n' + flight.getData();
           });
           return s;
        }
    }
    function createFlight(relation, date) {
        return new Flight(relation, date);
    }
    function createPassenger(name, surname, number, category) {
        return new Passenger(new Person(name, surname), new Seat(number, category));
    }

    try{
        var airport = new Airport();

        console.log('Aerodrom napravljen uspesno');

        var flightA = createFlight('Belgrade - New York', 'Oct 25 2017');
        var flightB = createFlight('Barcelona - Belgrade', 'Nov 11 2017');

        console.log('Letovi napravljeni uspesno');

        var johnSnow = createPassenger('John', 'Snow', '1', 'b');
        var cerseiLannister = createPassenger('Cercei', 'Lannister', '2', 'b');
        var daenerysTargaryen = createPassenger('Deanerys', 'Targaryen', '14');
        var tyrionLannister = createPassenger('Tyrion', 'Lannister');

        console.log('Putnici napravljeni uspesno');

        flightA.addPassenger(johnSnow);
        flightA.addPassenger(cerseiLannister);
        flightB.addPassenger(daenerysTargaryen);
        flightB.addPassenger(tyrionLannister);
        

        console.log('Pustinici dodati na letove uspesno');

        airport.addFlight(flightA);
        airport.addFlight(flightB);

        console.log('Letovi dodati aerodromu uspesno')

        console.log(airport.getData());

        console.log(flightA.getData());
    } catch(e) {
        console.log(e.name, e.messsage, e.stack);
    }


})();