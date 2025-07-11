const music = document.getElementById("bg-music");
let musicPlaying = false;

function toggleMusic() {
    if (music.paused) {
        music.play();
        document.getElementById("music-toggle").innerText = "🔊";
        musicPlaying = true;
    } else {
        music.pause();
        document.getElementById("music-toggle").innerText = "🔇";
        musicPlaying = false;
    }
}

// All countries
const countries = [
    "Japan", "Italy", "Maldives", "Switzerland", "France", "Morocco", "Greece",
    "South Korea", "Turkey", "Thailand", "Norway", "Indonesia", "USA", "Australia"
];

let scores = {};
countries.forEach(c => scores[c] = 0);

const quiz = [
    {
        question: "What’s your ideal climate?",
        options: [
            { text: "Warm & sunny ☀️", country: "Maldives" },
            { text: "Cold & snowy ❄️", country: "Switzerland" },
            { text: "Tropical 🌴", country: "Thailand" },
            { text: "Breezy spring 🌸", country: "Japan" }
        ]
    },
    {
        question: "Pick a type of scenery:",
        options: [
            { text: "Mountains ⛰️", country: "Norway" },
            { text: "Ocean 🌊", country: "Indonesia" },
            { text: "City lights 🌆", country: "South Korea" },
            { text: "Countryside 🌾", country: "France" }
        ]
    },
    {
        question: "What's your dream date?",
        options: [
            { text: "Picnic under cherry blossoms 🌸", country: "Japan" },
            { text: "Gondola ride through canals 🚣‍♀️", country: "Italy" },
            { text: "Candlelit beach dinner 🍽️", country: "Maldives" },
            { text: "Dancing in the streets 💃", country: "Greece" }
        ]
    },
    {
        question: "Pick a vacation activity:",
        options: [
            { text: "Spa & massage 🧖‍♀️", country: "Indonesia" },
            { text: "Street food adventure 🍜", country: "South Korea" },
            { text: "Snow sports ⛷️", country: "Switzerland" },
            { text: "Historical tour 🏛️", country: "Turkey" }
        ]
    },
    {
        question: "What’s your dream hotel vibe?",
        options: [
            { text: "Overwater villa 🏝️", country: "Maldives" },
            { text: "Cozy cabin 🏔️", country: "Norway" },
            { text: "Chic city suite 🏙️", country: "Japan" },
            { text: "Royal palace-style 👑", country: "Morocco" }
        ]
    },
    {
        question: "What’s your travel outfit?",
        options: [
            { text: "Flowy dress 👗", country: "Greece" },
            { text: "Hoodie & sneakers 👟", country: "USA" },
            { text: "Elegant & classy 🧥", country: "France" },
            { text: "Traditional style 🧕👘", country: "Morocco" }
        ]
    },
    {
        question: "Which view do you want from your window?",
        options: [
            { text: "Blue sea 🌊", country: "Bali" },
            { text: "Cherry blossom trees 🌸", country: "Japan" },
            { text: "Snowy mountains 🏔️", country: "Switzerland" },
            { text: "City skyline 🌆", country: "South Korea" }
        ]
    },
    {
        question: "Which pet do you vibe with most?",
        options: [
            { text: "Cat 🐱", country: "France" },
            { text: "Dog 🐶", country: "USA" },
            { text: "Bird 🐦", country: "Thailand" },
            { text: "No pets, just nature 🍃", country: "Indonesia" }
        ]
    },
    {
        question: "Start your travel day with...",
        options: [
            { text: "Garden walk 🌺", country: "Japan" },
            { text: "Local breakfast café ☕", country: "Italy" },
            { text: "Sunrise by the beach 🌅", country: "Maldives" },
            { text: "Boutique shopping 🛍️", country: "South Korea" }
        ]
    },
    {
        question: "Choose a flavor:",
        options: [
            { text: "Sweet 🍰", country: "France" },
            { text: "Spicy 🌶️", country: "Thailand" },
            { text: "Fresh 🍉", country: "Australia" },
            { text: "Rich 🍫", country: "Switzerland" }
        ]
    },
    {
        question: "Pick a word that excites you most:",
        options: [
            { text: "Peace", country: "Norway" },
            { text: "Passion", country: "Italy" },
            { text: "Culture", country: "Morocco" },
            { text: "Fun", country: "USA" }
        ]
    },
    {
        question: "Favorite sky moment?",
        options: [
            { text: "Sunset 🌇", country: "Greece" },
            { text: "Sunrise 🌄", country: "Indonesia" },
            { text: "Starry night 🌌", country: "Norway" },
            { text: "Cloudy calm sky ☁️", country: "Switzerland" }
        ]
    },
    {
        question: "Pick a romantic song vibe:",
        options: [
            { text: "Soft piano 🎹", country: "France" },
            { text: "Chill guitar 🎸", country: "Australia" },
            { text: "Slow violin 🎻", country: "Italy" },
            { text: "No music, just us 💞", country: "Maldives" }
        ]
    }
];
let currentQuestion = 0;

function startQuiz() {
    document.querySelector(".welcome-screen").classList.add("hidden");
    document.querySelector(".quiz-screen").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question-text").innerText = q.question;

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt.text;
        btn.onclick = () => {
            scores[opt.country]++;
            currentQuestion++;
            if (currentQuestion < quiz.length) {
                showQuestion();
            } else {
                showResult();
            }
        };
        container.appendChild(btn);
    });
}

function showResult() {
    const highest = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

    document.body.innerHTML = `
    <div class="result-screen">
      <h1>🎉 Your Dream Destination Is...</h1>
      <h2>${highest} 🧳</h2>
      <p>Pack your bags baby, we’re going to ${highest} together 😘</p>
      <button onclick="location.reload()">Play Again</button>
    </div>
  `;

    // Heart animation
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(heart);
    }
}
