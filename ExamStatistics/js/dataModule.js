var dataModule = (function(){
    
    function Subject(name) {
        this.listOfStudents = [];
        this.name = name;
    }
    function Student(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    function Exam(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    Subject.prototype.getSubjectName = function() {
        return this.name;
    }

    Subject.prototype.tookExam = function(student) {
        var checker = false;
        this.listOfStudents.forEach(function(person){
            if (student.getStudentInfo() == person.getStudentInfo()) {
                checker = true;
                return;
            }
        })
        return checker;
    }

    Subject.prototype.addToSelect = function() {
        // TODO adds created subject to select dropDown
    }
    Student.prototype.getStudentData = function() {
        return this.name + ' ' + this.surname;
    }

    Exam.prototype.getExamInfo = function() {
        return {
            subject : subject.getSubjectName,
            student : student.getStudentInfo
        }
    }

    Exam.prototype.hasPassed = function() {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        }
    }

    function createSubject(name){
        var s = new Subject(name);
        return s;
    }
    function createStudent(name, surname){
        var s = new Student(name, surname);
        return s;
    }
    function createExam(subject, student, grade){
        var s = new Exam(subject, student, grade);
        return s;
    }

    return {
        createSubject : createSubject,
        createStudent : createStudent,
        createExam : createExam,

    }

})();