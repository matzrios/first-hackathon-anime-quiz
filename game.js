class QuizGame {
    constructor(){
        this.quiz = [];
        this.score = 0;
        this.currentStage = -1;
    }

    updateScore(){
        this.score += 1;
    }

    startNewGame(data) {
        this.score = 0;
        this.currentStage = -1;
        this.quiz = data;
    }

    nextQuiz(){
        if(this.currentStage < this.quiz.length - 1 ){
            this.currentStage += 1;
            return this.quiz[this.currentStage];
        }else{
            return false;
        }
    }

    prevQuiz(){
        if(this.currentStage > 0){
            this.currentStage -= 1;
            return this.quiz[this.currentStage];
        }else{
            return false;
        }
    }

    answerQuiz(value){
        let currentQuiz = this.quiz[this.currentStage];
        if(value === currentQuiz.correct_answer){
            this.updateScore();
            return true; 
        }
        return false;
    }

    getQuizAnswers(){
        let quiz = this.quiz[this.currentStage];
        let answers = [...quiz.incorrect_answers, quiz.correct_answer];
        answers.sort(() => Math.random() - 0.5);
        // answers.sort((a, b) => Math.random() - Math.random())
        return answers;
    }

    getQuizResult(){
        let quiz = this.quiz[this.currentStage];
        return quiz.correct_answer;
    }
}