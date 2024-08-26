const questions = [
    {
        question: "What is the fastest bird in the world?",
        answers: [
            {text: "Peregrine Falcon", correct: true},
            {text: "Eagle", correct: false},
            {text: "Owl", correct: false},
            {text: "Bat", correct: false},
        ]
    },
    { 
        question: "What is the largest animal in the world?",
        answers: [
            {text: "Gorilla", correct:false},
            {text: "Penguin", correct:false},
            {text: "Blue Whale", correct:true},
            {text: "Shark", correct:false},
            
        ]
    },
    {
        question: "Which animal is known as the ship of the desert?",
        answers: [
            {text: "Horse", correct: false},
            {text: "Donkey", correct: false},
            {text: "Camel", correct: true},
            {text: "Cow", correct: false},
        ]
    },
    {
        question: "How many legs does a spider have?",
        answers: [
            {text: "Four", correct: false},
            {text: "Ten", correct: false},
            {text: "Eight", correct: true},
            {text: "Sixteen", correct: false},
        ]
    },
    {
        question: "Which animal is the largest primate in the world?",
        answers: [
            {text: "Gorilla", correct: true},
            {text: "Oxen", correct: false},
            {text: "Elephant", correct: false},
            {text: "Camel", correct: false},
        ]
    },
    {
        question: "What is the main diet of a panda?",
        answers: [
            {text: "Fish", correct: false},
            {text: "Bamboo", correct: true},
            {text: "Crops", correct: false},
            {text: "Human flesh", correct: false},
        ]
    },
    {
        question: "Which bird is associated with delivering babies in folklore?",
        answers: [
            {text: "Stork", correct: true},
            {text: "Sturk", correct: false},
            {text: "Owl", correct: false},
            {text: "Guineafowl", correct: false},
        ]
    },
    {
        question: "Which type of animal is a Komodo dragon?",
        answers: [
            {text: "Lizard", correct: true},
            {text: "Chamelon", correct: false},
            {text: "Aligator", correct: false},
            {text: "Wall Gecko", correct: false},
        ]
    },
    {
        question: "What is the smallest bird in the world?",
        answers: [
            {text: "Owl", correct: false},
            {text: "Bat", correct: false},
            {text: "Bee Hummingbird", correct: true},
            {text: "Eagle", correct: false},
        ]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [
            {text: "Three", correct: true},
            {text: "Five", correct: false},
            {text: "Six", correct: false},
            {text: "One", correct: false},
        ]
    },
    {
        question: "What is the land's largest canivore?",
        answers: [
            {text: "Polar Bear", correct: true},
            {text: "Gorilla", correct: false},
            {text: "Shark", correct: false},
            {text: "Anaconda", correct: false},
        ]
    },
    {
        question: "Which mammal is known to have the most powerful bite?",
        answers: [
            {text: "Snake", correct: false},
            {text: "Polar Bear", correct: false},
            {text: "Hippopotamus", correct: true},
            {text: "Gorilla", correct: false},
        ]
    },
    {
        question: "Which empire was ruled by Genghis Khan?",
        answers: [
            {text: "Umpire", correct: false},
            {text: "Empire", correct: false},
            {text: "Art Empire", correct: false},
            {text: "Mongol Empire", correct: true},
        ]
    },
    {
        question: "Which of this is the only mammal capable of true flight?",
        answers: [
            {text: "Chicken", correct: false},
            {text: "Bat", correct: true},
            {text: "Owl", correct: false},
            {text: "Bird", correct: false},
        ]
    },
    {
        question: "Which animal can sleep for three years?",
        answers: [
            {text: "Falcon", correct: false},
            {text: "Sea creatures", correct: false},
            {text: "Guineafowl", correct: false},
            {text: "Snail", correct: true},
        ]
    },
    {
        question: "How many bones do sharks have in their body?",
        answers: [
            {text: "None", correct: true},
            {text: "One", correct: false},
            {text: "Fifteen", correct: false},
            {text: "Five", correct: false},
        ]
    },
    {
        question: "What is the fastest bird in the world?",
        answers: [
            {text: "Peregrine Falcon", correct: true},
            {text: "shark", correct: false},
            {text: "shark", correct: false},
            {text: "shark", correct: false},
        ]
    },
    {
        question: "What is the fastest land animal?",
        answers: [
            {text: "Horse", correct: false},
            {text: "Cheetah", correct: true},
            {text: "Tiger", correct: false},
            {text: "Lion", correct: false},
        ]
    },
    {
        question: "Which animal is known for its colorful tail feathers?",
        answers: [
            {text: "Guineafowl", correct: false},
            {text: "Peacock", correct: true},
            {text: "Tukey", correct: false},
            {text: "Dog", correct: false},
        ]
    },
    {
        question: "What is the primary diet of a koala?",
        answers: [
            {text: "Lemon grass", correct: false},
            {text: "Shrubs", correct: false},
            {text: "Eucalyptus leaves", correct: true},
            {text: "Corn", correct: false},
        ]
    },
    {
        question: "Which fish is known for its ability to blow itself up like a ballon?",
        answers: [
            {text: "Sea dragon", correct: false},
            {text: "Penguin", correct: false},
            {text: "Puffer fish", correct: true},
            {text: "Blue Whale", correct: false},
        ]
    },
    {
        question: "Which animal is known for having a pouch to carry its young?",
        answers: [
            {text: "Lion", correct: false},
            {text: "Cheetah", correct: false},
            {text: "Kangaroo", correct: true},
            {text: "Mother hen", correct: false},
        ]
    },
    {
        question: "Who was the first president of the United States?",
        answers: [
            {text: "Barack Obama", correct: false},
            {text: "George Washington", correct: true},
            {text: "Joe Biden", correct: false},
            {text: "Donald Trump", correct: false},
        ]
    },
    {
        question: "Which ancient civilization built the pyramids?",
        answers: [
            {text: "Israelites", correct: false},
            {text: "Hebrews", correct: false},
            {text: "Eyptians", correct: true},
            {text: "Jews", correct: false},
        ]
    },
    {
        question: "Who was the first man to walk on the moon?",
        answers: [
            {text: "Moonman", correct: false},
            {text: "Saka Vincent", correct: false},
            {text: "Neil Armstrong", correct: true},
            {text: "Strong Vincent", correct: false},
        ]
    },
    {
        question: "Which year did the titanic sink?",
        answers: [
            {text: "1912", correct: true},
            {text: "1920", correct: false},
            {text: "1918", correct: false},
            {text: "1915", correct: false},
        ]
    },
    {
        question: "Who wrote the declaration of independence?",
        answers: [
            {text: "Fredrick Iman", correct: false},
            {text: " General Babangida", correct: false},
            {text: "Thomas Jefferson", correct: true},
            {text: "Frederick Luggard", correct: false},
        ]
    },
    {
        question: "Which war was fought between the North and South regions in the United States?",
        answers: [
            {text: "Interstate war", correct: false},
            {text: "The Civil War", correct: true},
            {text: "World War I", correct: false},
            {text: "World War II", correct: false},
        ]
    },
    {
        question: "In which year did Berlin Wall fall?",
        answers: [
            {text: "1990", correct: false},
            {text: "1912", correct: false},
            {text: "1914", correct: false},
            {text: "1989", correct: true},
        ]
    },
    {
        question: "What was the name of the ship that brought the pilgrims to America in 1620?",
        answers: [
            {text: "Mayflower", correct: true},
            {text: "Independence boat", correct: false},
            {text: "Titanic", correct: false},
            {text: "Ship", correct: false},
        ]
    },
    {
        question: "Who was the British Prime Minister during world War II?",
        answers: [
            {text: "George Washington", correct: false},
            {text: "Barak Obama", correct: false},
            {text: "Winston Churchill", correct: true},
            {text: "Donald Trump", correct: false},
        ]
    },
    {
        question: "Who discovered America in 1492?",
        answers: [
            {text: "Christopher Columbus", correct: true},
            {text: "Barack Obama", correct: false},
            {text: "George Washington", correct: false},
            {text: "Willson Churchill", correct: false},
        ]
    },
    {
        question: "What year did the World War I begin?",
        answers: [
            {text: "1914", correct: true},
            {text: "1930", correct: false},
            {text: "1912", correct: false},
            {text: "1915", correct: false},
        ]
    },
    {
        question: "What event started the great depression in 1933?",
        answers: [
            {text: "Worls War I", correct: false},
            {text: "Bitcoin Dip", correct: false},
            {text: "Stock Crash Market", correct: true},
            {text: "World War II", correct: false},
        ]
    },
    {
        question: "Who was the first human to journey into outerspace?",
        answers: [
            {text: "Yuri Gagarin", correct: true},
            {text: "Neil Armstrong", correct: false},
            {text: "Churchill Peu", correct: false},
            {text: "Martin George", correct: false},
        ]
    },
    {
        question: "Which American civil rights leader delivered the 'I have a dream' speech?",
        answers: [
            {text: "Marie George", correct: false},
            {text: "Lurther Gongkong", correct: false},
            {text: "Martin Lurther King", correct: true},
            {text: "George Hillson", correct: false},
        ]
    },
    {
        question: "Who was the longest-reigning British monarch before Queen Elizabeth II?",
        answers: [
            {text: "Queen Elizabeth I", correct: false},
            {text: "Queen Sherlock", correct: false},
            {text: "Queen Marie", correct: false},
            {text: "Queen Victoria", correct: true},
        ]
    },
    {
        question: "Which European country was divided into seperate states by the Treaty of Westphalia in 1648?",
        answers: [
            {text: "Luxembourg", correct: false},
            {text: "Germany", correct: true},
            {text: "Turkey", correct: false},
            {text: "United Kingdom", correct: false},
        ]
    },
    {
        question: "Who is referred to as the 'Father of Nation' in India?",
        answers: [
            {text: "Jet Li", correct: false},
            {text: "Budhaism", correct: true},
            {text: "Mahatma Gandhi", correct: false},
            {text: "Bruce Lee", correct: false},
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Leonardo da Vinci", correct: true},
            {text: "Marie Shelskon", correct: false},
            {text: "Lisa SNR", correct: false},
            {text: "Elizabeth Vinci", correct: false},
        ]
    },
    {
        question: "Who was the first woman to win a Nobel prize?",
        answers: [
            {text: "Marie Curie", correct: true},
            {text: "Chiamanda", correct: false},
            {text: "Shelby Eisten", correct: false},
            {text: "Mary Vincent", correct: false},
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet?",
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: "Chiamanda", correct: false},
            {text: "Willie SNR", correct: false},
            {text: "Queens shakespeare", correct: false},
        ]
    },
    {
        question: "Who is known as the 'Queen of Soul'?",
        answers: [
            {text: "Queen Victoria", correct: false},
            {text: "Queen Elizabeth I", correct: false},
            {text: "Aretha Franklin", correct: true},
            {text: "Queen Elizabeth II", correct: false},
        ]
    },
    {
        question: "Who is the founder of Microsoft?",
        answers: [
            {text: "Elon Musk", correct: false},
            {text: "Bill Gates", correct: true},
            {text: "Jeff Bezos", correct: false},
            {text: "Charles Darwin", correct: false},
        ]
    },
    {
        question: "Who is the CEO of Tesla, Inc.?",
        answers: [
            {text: "Jeff Bezos", correct: false},
            {text: "Elon Musk", correct: true},
            {text: "Bill Gates", correct: false},
            {text: "Tesla Motors", correct: false},
        ]
    },
    {
        question: "Who is the author Harry Potter?",
        answers: [
            {text: "R. Chiamanda", correct: false},
            {text: "J.K. Rowling", correct: true},
            {text: "William Shakespeare", correct: false},
            {text: "George Churchill", correct: false},
        ]
    },
    {
        question: "Who invented light bulb?",
        answers: [
            {text: "Neil Armstrong", correct: false},
            {text: "Thomas Edison", correct: true},
            {text: "Aretha Franklin", correct: false},
            {text: "Charles Darwin", correct: false},
        ]
    },
    {
        question: "Who is the main character in The Great Gatsby?",
        answers: [
            {text: "Tom Gatsby", correct: false},
            {text: "Jay Gatsby", correct: true},
            {text: "Vicky Gatsby", correct: false},
            {text: "Grace Gatsby", correct: false},
        ]
    },
    {
        question: "Who is known for his theory of evolution by natural selection?",
        answers: [
            {text: "Thomas Edison", correct: false},
            {text: "Charles Darwin", correct: true},
            {text: "Aretha Franklin", correct: false},
            {text: "Neil Armstrong", correct: false},
        ]
    },
    {
        question: "Who wrote 'The Adventures of Tom Sawyer?",
        answers: [
            {text: "William Shakespeare", correct: false},
            {text: "Tom Willie", correct: false},
            {text: "Mark Twain", correct: true},
            {text: "Chiamanda", correct: false},
        ]
    } 
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;    

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){ 
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");  
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();