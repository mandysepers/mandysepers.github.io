// Global Variables
var currentQuestion = 0;
var userSelection;
var timer;

// Quiz Data
var allQuizData = {
    "Alex": [
        {
            question: "Sample Question 1? alex",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? alex",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ],
    "Johan": [
        {
            question: "Sample Question 1? Johan",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? Johan",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ],
    "Maureen": [
        {
            question: "Sample Question 1? maureen",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? maureen",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ],
    "Myrna": [
        {
            question: "Sample Question 1? Myrna",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? Myrna",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ],
    "Patrick": [
        {
            question: "Sample Question 1? Patrick",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? Patrick",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ],
    "Ria": [
        {
            question: "Sample Question 1? Ria",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? Ria",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ],
    "Romy": [
        {
            question: "Sample Question 1? Romy",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? Romy",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ],
    "Timo": [
        {
            question: "Sample Question 1? timo",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? timo",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ]
};

var quizData = [];

// Start Quiz Function
function startQuiz() {
    userSelection = document.getElementById("userName").value;
    quizData = allQuizData[userSelection];
    document.getElementById("userSelection").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showNextQuestion();
}

// Show Next Question Function
function showNextQuestion() {
    if (currentQuestion < quizData.length) {
        var currentQuizQuestion = quizData[currentQuestion];
        document.getElementById("questionText").textContent = currentQuizQuestion.question;

        var answerOptionsSelect = document.getElementById("answerOptions");
        answerOptionsSelect.innerHTML = "";

        currentQuizQuestion.options.forEach(function (option) {
            var optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            answerOptionsSelect.appendChild(optionElement);
        });
    } else {
        // Quiz Completed, Show Image
        document.getElementById("quiz").style.display = "none";
        document.getElementById("winImage").src = "/images/codeImages/" + userSelection + ".png";
        document.getElementById("imageDisplay").style.display = "block";
    }
}

// Check Answer Function
function checkAnswer() {
    var selectedAnswer = document.getElementById("answerOptions").value;
    var currentQuizQuestion = quizData[currentQuestion];

    if (selectedAnswer === currentQuizQuestion.correctAnswer) {
        currentQuestion++;
        resetTimer();
        showNextQuestion();
    } else {
        document.getElementById("quizButton").disabled = true;
        startTimer();
    }
}

// Timer Functions
function startTimer() {
    var timeLeft = 5; // seconds

    timer = setInterval(function () {
        document.getElementById("timer").textContent = "Fout! Voor straf nog " + timeLeft + " seconden wachten.";

        if (timeLeft <= 0) {
            clearInterval(timer);
            resetTimer();
        }

        timeLeft--;
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("timer").textContent = "";
    document.getElementById("quizButton").disabled = false;
}

// Initialize Quiz on Page Load
document.addEventListener("DOMContentLoaded", function () {
    // Load any initializations or actions here
});


// particles.js configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 52,
            density: {
                enable: true,
                value_area: 631.3280775270874
            }
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
