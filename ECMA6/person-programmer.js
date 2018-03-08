class Person {
    constructor (name, surname){
        this.name = name;
        this.surname = surname;
    }
    printPersonData() {
        return `${this.name} ${this.surname}`;
    }
    
}

class Programmer extends Person {
    constructor (name, surname, ...languages) {
        super(name,surname);
        this.languages = languages;
    };
    
    printProgrammerData () {
        return `${this.printPersonData()} \n Languages: ${this.languages.join(', ')}`;
    }
    learnedNewLanguage (language) {
        this.languages.push(language);
    }
}

let languages = ['JavaScript', 'Python', 'PHP']
let persona = new Person('Miko','Mardjetko');
let programer1 = new Programmer('Miko', 'Mardjetko', ...languages);

console.log(persona.printPersonData());
console.log(programer1.printProgrammerData());
console.log(programer1.languages);
programer1.learnedNewLanguage('Ruby');
console.log(programer1.printProgrammerData());
