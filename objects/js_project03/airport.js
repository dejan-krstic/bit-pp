'use strict';
(function () {
    console.log("Hello!\n");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    }

    function Seat(number, category) {
        this.seatNumber = number || Math.floor(10 + Math.random() * 91);
        this.seatCategory = category || 'e';
        this.getData = function () {
            return this.seatNumber + ", " + this.seatCategory.toUpperCase();
        }
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            if (this.seat.seatCategory=='b') { 
                // task was only to change Passenger.getData Seat.getData remained intact
            return this.seat.getData().toLowerCase() + 'usiness, ' + this.person.getData();
        } else {
            return this.seat.getData().toLowerCase() + 'conomy, ' + this.person.getData(); 
        }
    }
}

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.passengerList = [];
        this.addPassenger = function (passeng) {
            var allOK = true;
            // I had to make two forEach loops so passenger that changes seat couldn't be put on seat already taken 
            this.passengerList.forEach(function (pass) {
                if (pass.seat.seatNumber == passeng.seat.seatNumber) {
                    console.log('This seat is already taken! Please choose another.');
                    allOK = false;
                }
            });
            if (allOK) {
                this.passengerList.forEach(function (pass) {
                    if (pass.person.name == passeng.person.name && pass.person.surname == passeng.person.surname) {
                        pass.seat = passeng.seat;
                        console.log('Seat number and category successfully changed for ' + passeng.person.name + ' ' + passeng.person.surname);
                        allOK = false;
                    };
                })
            };

            if (allOK) {
                if (this.passengerList.length >= 100) {
                    console.log("All seats are already taken! Please book another flight.");

                } else {
                    this.passengerList.push(passeng);
                };
            };
        }

        this.getData = function () {
            var rel = this.relation.toUpperCase().split(' - ');
            var s = this.date.getDate() + '.' + this.date.getMonth() + '.' + this.date.getFullYear() + ', ' + rel[0].slice(0, 1) + rel[0].slice(-1) + ' - ' + rel[1].slice(0, 1) + rel[1].slice(-1) + ', business passengers: '+ this.businessPassengers();
            this.passengerList.forEach(function (passeng) {
                s += '\n\t\t\t\t' + passeng.getData();
            });
            return s;
        }
        this.businessPassengers = function () {
            var k=0;
            this.passengerList.forEach(function(pass) {
                if (pass.seat.seatCategory == 'b') {
                    k+=1;
                }
            });
            return k;
        }
    }


function Airport() {
    this.name = 'Nikola Tesla';
    this.flightList = [];
    this.businessPassengers = function () {
        var k=0;
        this.flightList.forEach(function (flight) {
            k+= flight.businessPassengers(); 
        });
        return k;
    }
    this.addFlight = function (flight) {
        this.flightList.push(flight);

    }
    this.totalPassengers = function () {
        var k = 0;
        this.flightList.forEach(function (flight) {
            k += flight.passengerList.length;
        });
        return k;
    }
    this.getData = function () {
        var s = '\nAirport ' + this.name + ', total passengers: ' + this.totalPassengers() + ', business: '+ this.businessPassengers();
        this.flightList.forEach(function (flight) {
            s += '\n\t\t' + flight.getData();
        });
        return s;
    }
}

function createFlight(relation, date) {
    return new Flight(relation, date);
}

function createPassenger(name, surname, seatNumber, category) {
    return new Passenger(new Person(name, surname), new Seat(seatNumber, category));
}

var airportNikolaTesla = new Airport();
var flightOne = createFlight('Belgrade - New York', 'Oct 25 2018');
var flightTwo = createFlight('Barcelona - Belgrade', 'Nov 11 2018');

var johnSnow = createPassenger('John', 'Snow', 3, 'b');
var cerseiLannister = createPassenger('Cercei', 'Lannister', 2, 'b');
var daenerysTargaryen = createPassenger('Deanerys', 'Targaryen', 14);
var dejanKrstic = createPassenger('Dejan', 'Krstic', 1, 'b');
var dejanKrstic2 = createPassenger('Dejan', 'Krstic', 4, 'e');
var tyrionLannister = createPassenger('Tyrion', 'Lannister');

airportNikolaTesla.addFlight(flightOne);
airportNikolaTesla.addFlight(flightTwo);

flightOne.addPassenger(johnSnow);

flightTwo.addPassenger(johnSnow);

flightOne.addPassenger(cerseiLannister);

flightTwo.addPassenger(cerseiLannister);

flightTwo.addPassenger(daenerysTargaryen);

flightTwo.addPassenger(dejanKrstic);

flightTwo.addPassenger(dejanKrstic2);

flightTwo.addPassenger(tyrionLannister);


console.log(airportNikolaTesla.getData());



}) ();