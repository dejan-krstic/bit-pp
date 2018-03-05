var appModule = (function (UIModule, dataModule) {
    function addButtonListener () {
        document.querySelector(UIModule.UISelectors.addButton).addEventListener('click', function() {
            var data = UIModule.getFormData;
            var validationMessage = UIModule.validation(data);
            if (validationMessage != "OK") {
                setError(validationMessage);
                return;
            }
            var student = dataModule.createStudent(data.name, data.surname);
            if (!data.subject.tookExam(student)) {
                var exam = dataModule.createExam(data.subject, student, data.grade);
                dataModule.updateStatistics(exam);
            }


        });
        function updateStatistics(exam) {
            // TODO some magic to update counters and lists on page
        }


    }


})(UIModule, dataModule);