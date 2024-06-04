// script.js

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: 0
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: 0
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
        correctAnswer: 3
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Leonardo da Vinci"],
        correctAnswer: 3
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus", "Earth"],
        correctAnswer: 0
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: 1
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Thomas Edison"],
        correctAnswer: 1
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correctAnswer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    },
    {
        question: "What is the primary ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Garlic"],
        correctAnswer: 1
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "George Orwell", "Jane Austen", "Mark Twain"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Italy?",
        options: ["Venice", "Milan", "Naples", "Rome"],
        correctAnswer: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
        correctAnswer: 1
    },
    {
        question: "What is the freezing point of water?",
        options: ["0°C", "32°F", "100°C", "0°F"],
        correctAnswer: 0
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('submit-answer').addEventListener('click', submitAnswer);

function startQuiz() {
    const initialScreen = document.getElementById('initial-screen');
    const quizScreen = document.getElementById('quiz-screen');

   
    initialScreen.style.opacity = 0;
    setTimeout(() => {
        initialScreen.style.display = 'none';
        
      
        quizScreen.style.display = 'block';
        setTimeout(() => {
            quizScreen.style.opacity = 1;
        }, 10); 
        
       
        displayQuestion();
        
          startTimer();
    }, 500); 

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionElements = document.querySelectorAll('#answers span');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionElements.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });

   
    document.getElementById('feedback').textContent = '';
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.checked = false;
    });
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert('Please select an answer');
        return;
    }

    const selectedAnswer = parseInt(selectedOption.value);
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('feedback').textContent = 'Correct!';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').textContent = 'Incorrect!';
        document.getElementById('feedback').style.color = 'red';
    }

    updateScore();

   
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function startTimer() {
    let timeLeft = 30; 
    document.getElementById('timer').textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAnswer();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('quiz-screen').innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your final score is: ${score}</p>
    `;
}
}

