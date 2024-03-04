const api = new Api(31, 'easy', 'multiple');
const game = new QuizGame();
const currentQuestion = {};

const scoreElem = document.querySelector(".score");
const questionElem = document.querySelector(".questions");
const questionNumElem = document.querySelector(".questions__numbers");
const answerContainer = document.querySelector(".answers--container");


fetchQuestions();

async function fetchQuestions(){
    const data = await api.getQuestions();
    if(data){
        game.startNewGame(data);
    }
    nextQuestion();
    console.log(data);
}

function drawQuestions(quiz){
    const ask = new DOMParser().parseFromString(quiz.question, 'text/html');
    const decodedAsk = ask.body.textContent;
    console.log(decodedAsk)
    questionElem.innerText = decodedAsk;
    questionNumElem.innerText = `Question: ${(game.currentStage+1)}/10`;
    scoreElem.innerText = `Score: ${game.score}`;

    let answers = game.getQuizAnswers();
    answerContainer.innerHTML = "";
    for(let i = 0; i < answers.length; i++){
        const answerElem = document.createElement("section");
        answerElem.classList.add("answer");
        const button = document.createElement("button");
        button.classList.add("answer-button");
        button.addEventListener("click", answerClick);

        const answer = new DOMParser().parseFromString(answers[i], 'text/html');
        button.value = answers[i];
        button.innerText = answer.body.textContent;
        answerElem.append(button);
        answerContainer.append(answerElem);
    }

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next");
    nextBtn.innerText = "Next Question";
    nextBtn.addEventListener('click', nextQuestion);
    answerContainer.append(nextBtn);

}

function nextQuestion(){
    const newQuiz = game.nextQuiz();
    if(newQuiz){
        drawQuestions(newQuiz);
    }else{
        if(game.currentStage > 1){
            console.log("DONE");
            answerContainer.innerHTML = "";
            questionElem.innerHTML = "<h1>Quiz Complete!!</h1><br><h2>You are an Anime wiz</h2>";
            for(let n=0;n<3;n++){
                setTimeout(showConfetti, (400*n));

            }
        }
        
    }
}

function showConfetti(){
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
    });
}
// function checkQuizAnswer(answer){
//     const quizResult = game.answerQuiz(answer);
//     if(quizResult){
//         console.log("CORRECT");
//     }else{
//         console.log("WRONG");
//     }
//     nextQuestion();
// }

function answerClick(e){
    const answer = e.target.value;
    const quizResult = game.answerQuiz(answer);
    if(quizResult){
        e.target.classList.add("answer-button--correct");
        console.log("CORRECT");
    }else{
        const correctAns = game.getQuizResult();
        const buttons = document.querySelectorAll(".answer-button");
        for(let i =0; i<buttons.length; i++){
            let elem = buttons[i];
            if(elem.value === answer){
                elem.classList.add("answer-button--wrong");
            }
            if(elem.value === correctAns){
                elem.classList.add("answer-button--correct");
            }
        }
        
        console.log("WRONG");
    }
    // checkQuizAnswer(answer);
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  