function checkAnswers() {
    // Count correct answers
    var correctAnswers = 0;

    // Check Questions
    for (let i = 1; i <= 8; i++) {
        var selectedAnswer = document.querySelector('input[name="q' + i + '"]:checked');
        
        if (selectedAnswer) {
            if (selectedAnswer.value === "TRUE") {
                correctAnswers++;
            }
        } else {
            // Handle the case where no answer is selected for this question
            alert("Svara på alla frågor");
            return; // Stop checking further questions
        }
    }

    // Display alert
    alert("Antal rätta svar: " + correctAnswers);
}
