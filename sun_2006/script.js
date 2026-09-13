// ==========================================
// 🎂 PREMIUM BIRTHDAY WEBSITE
// ==========================================

let currentStep = 1;
const totalSteps = 13;

let typingTimer = null;
let fireworksRunning = false;

// ==========================================
// ELEMENTS
// ==========================================

const welcome = document.getElementById("welcome");
const surprise = document.getElementById("surprise");
const finalSection = document.getElementById("final");

const birthdayMusic = document.getElementById("birthdayMusic");

const stepNumber = document.getElementById("stepNumber");
const stepIcon = document.getElementById("stepIcon");
const stepTitle = document.getElementById("stepTitle");
const stepText = document.getElementById("stepText");

const progressBar = document.getElementById("progressBar");
const nextButton = document.getElementById("nextButton");

const photoBox = document.getElementById("photoBox");
const birthdayPhoto = document.getElementById("birthdayPhoto");
const photoCaption = document.getElementById("photoCaption");

const bigCake = document.getElementById("bigCake");

const typingBox = document.getElementById("typingBox");
const typingText = document.getElementById("typingText");

const finalTypingText =
    document.getElementById("finalTypingText");

const shareStatus =
    document.getElementById("shareStatus");


// ==========================================
// 💌 STEP DATA
// ==========================================

const steps = {

    // ======================================
    // STEP 1
    // ======================================

    1: {
        icon: "💌",
        title: "A Special Message",
        text: "Your birthday journey starts here. Get ready for some amazing surprises! ❤️",

        typing:
            "Today is your day, Sunayna... and this little surprise was made especially for you. ❤️"
    },


    // ======================================
    // STEP 2
    // ======================================

    2: {
        icon: "✨",
        title: "You Are Special",
        text: "Today is all about celebrating the amazing person you are! 😊",

        typing:
            "Never forget how special you are. Keep smiling, keep dreaming and keep being amazing! ✨"
    },


    // ======================================
    // STEP 3 - PHOTO 1
    // ======================================

    3: {
        icon: "📸",
        title: "Memory #1",
        text: "A beautiful moment worth keeping forever. ❤️",

        photo: "images/memory1.jpg",

        caption:
            "❤️ One beautiful memory ❤️"
    },


    // ======================================
    // STEP 4 - PHOTO 2
    // ======================================

    4: {
        icon: "📸",
        title: "Memory #2",
        text: "Some moments become beautiful memories. 💕",

        photo: "images/memory2.jpg",

        caption:
            "💕 A moment to remember forever 💕"
    },


    // ======================================
    // STEP 5 - PHOTO 3
    // ======================================

    5: {
        icon: "📸",
        title: "Memory #3",
        text: "Another little piece of a beautiful journey. ✨",

        photo: "images/memory3.jpg",

        caption:
            "✨ Beautiful memories never fade ✨"
    },


    // ======================================
    // STEP 6 - PHOTO 4
    // ======================================

    6: {
        icon: "📸",
        title: "Memory #4",
        text: "Some memories deserve a special place in our hearts. ❤️",

        photo: "images/memory4.jpg",

        caption:
            "❤️ A special moment ❤️"
    },


    // ======================================
    // STEP 7 - PHOTO 5
    // ======================================

    7: {
        icon: "📸",
        title: "Memory #5",
        text: "Keep smiling whenever you look back at this moment. 😊",

        photo: "images/memory5.jpg",

        caption:
            "😊 Keep this smile forever 😊"
    },


    // ======================================
    // STEP 8 - PHOTO 6
    // ======================================

    8: {
        icon: "📸",
        title: "Memory #6",
        text: "A beautiful memory from a beautiful person. 💖",

        photo: "images/memory6.jpg",

        caption:
            "💖 A beautiful memory 💖"
    },


    // ======================================
    // STEP 9 - PHOTO 7
    // ======================================

    9: {
        icon: "📸",
        title: "Memory #7",
        text: "Moments like these are worth remembering. 🌸",

        photo: "images/memory7.jpg",

        caption:
            "🌸 A moment full of memories 🌸"
    },


    // ======================================
    // STEP 10 - PHOTO 8
    // ======================================

    10: {
        icon: "📸",
        title: "Memory #8",
        text: "Another beautiful chapter of your memories. 💕",

        photo: "images/memory8.jpg",

        caption:
            "💕 Another beautiful chapter 💕"
    },


    // ======================================
    // STEP 11 - PHOTO 9
    // ======================================

    11: {
        icon: "📸",
        title: "Memory #9",
        text: "Some memories become more special with time. ✨",

        photo: "images/memory9.jpg",

        caption:
            "✨ A memory worth keeping ✨"
    },


    // ======================================
    // STEP 12 - PHOTO 10
    // ======================================

    12: {
        icon: "📸",
        title: "Memory #10",
        text: "And here is one last beautiful memory before the final surprise. ❤️",

        photo: "images/memory10.jpg",

        caption:
            "❤️ One last beautiful memory ❤️"
    },


    // ======================================
    // STEP 13 - CAKE
    // ======================================

    13: {
        icon: "🎂",
        title: "The Final Surprise",
        text: "Make a wish... because your special moment has arrived! 🎂✨",

        cake: true,

        typing:
            "Close your eyes, make a wish and get ready for the biggest birthday surprise! 🎂✨"
    }
};


// ==========================================
// 🎵 START BIRTHDAY
// ==========================================

function startBirthday() {

    if (welcome) {
        welcome.classList.add("hidden");
    }

    if (surprise) {
        surprise.classList.remove("hidden");
    }

    if (birthdayMusic) {

        birthdayMusic.currentTime = 0;

        birthdayMusic.play().catch(function () {

            console.log(
                "Music requires user interaction."
            );

        });
    }

    currentStep = 1;

    showStep(currentStep);

    startHeartRain();

    startFireworks();

    launchConfetti(70);
}


// ==========================================
// 📸 SHOW STEP
// ==========================================

function showStep(step) {

    const data = steps[step];

    if (!data) {
        return;
    }


    // ======================================
    // STEP NUMBER
    // ======================================

    if (stepNumber) {

        stepNumber.textContent =
            `Step ${step} of ${totalSteps}`;
    }


    // ======================================
    // ICON
    // ======================================

    if (stepIcon) {

        stepIcon.textContent =
            data.icon || "❤️";
    }


    // ======================================
    // TITLE
    // ======================================

    if (stepTitle) {

        stepTitle.textContent =
            data.title || "";
    }


    // ======================================
    // DESCRIPTION
    // ======================================

    if (stepText) {

        stepText.textContent =
            data.text || "";
    }


    // ======================================
    // HIDE PHOTO
    // ======================================

    if (photoBox) {

        photoBox.classList.add("hidden");
    }


    // ======================================
    // HIDE CAKE
    // ======================================

    if (bigCake) {

        bigCake.classList.add("hidden");
    }


    // ======================================
    // HIDE TYPING
    // ======================================

    if (typingBox) {

        typingBox.classList.add("hidden");
    }


    // ======================================
    // CLEAR OLD TYPING
    // ======================================

    if (typingText) {

        typingText.textContent = "";
    }


    if (typingTimer) {

        clearTimeout(typingTimer);
    }


    // ======================================
    // ⌨️ TYPING EFFECT
    // ======================================

    if (
        data.typing &&
        typingBox &&
        typingText
    ) {

        typingBox.classList.remove(
            "hidden"
        );

        typeText(
            data.typing,
            typingText,
            35
        );
    }


    // ======================================
    // 📸 PHOTO
    // ======================================

    if (
        data.photo &&
        photoBox &&
        birthdayPhoto
    ) {

        // Reset animation

        birthdayPhoto.classList.remove(
            "photo-change"
        );

        void birthdayPhoto.offsetWidth;

        birthdayPhoto.classList.add(
            "photo-change"
        );


        // Set image

        birthdayPhoto.src =
            data.photo;


        // Set caption

        if (photoCaption) {

            photoCaption.textContent =
                data.caption ||
                "❤️ A beautiful memory ❤️";
        }


        // Image error handling

        birthdayPhoto.onerror =
            function () {

                console.error(
                    "Could not load:",
                    data.photo
                );

                birthdayPhoto.alt =
                    "Memory photo not found";

            };


        photoBox.classList.remove(
            "hidden"
        );
    }


    // ======================================
    // 🎂 CAKE
    // ======================================

    if (
        data.cake &&
        bigCake
    ) {

        bigCake.classList.remove(
            "hidden"
        );

        launchConfetti(100);
    }


    // ======================================
    // 📊 PROGRESS
    // ======================================

    if (progressBar) {

        const progress = totalSteps > 0
            ? Math.min(
                100,
                Math.max(0, (step / totalSteps) * 100)
            )
            : 0;

        progressBar.style.width =
            `${progress}%`;
    }


    // ======================================
    // ❤️ NEXT BUTTON
    // ======================================

    if (nextButton) {

        if (step === totalSteps) {

            nextButton.textContent =
                "See Final Surprise 🎉";

        } else {

            nextButton.textContent =
                "Next Surprise ❤️";
        }
    }


    // ======================================
    // 🎉 EXTRA CONFETTI FOR PHOTOS
    // ======================================

    if (data.photo) {

        launchConfetti(25);
    }
}


// ==========================================
// ⌨️ TYPING EFFECT
// ==========================================

function typeText(
    text,
    element,
    speed = 40
) {

    if (!element) {
        return;
    }

    element.textContent = "";

    let index = 0;


    function typeCharacter() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            typingTimer =
                setTimeout(
                    typeCharacter,
                    speed
                );

        }
    }


    typeCharacter();
}


// ==========================================
// ❤️ NEXT STEP
// ==========================================

function nextStep() {

    if (currentStep >= totalSteps) {

        showFinalSurprise();

        return;
    }


    currentStep++;

    showStep(currentStep);


    // Small confetti bursts

    if (
        currentStep >= 3 &&
        currentStep <= 12
    ) {

        launchConfetti(35);
    }
}


// ==========================================
// 🎉 FINAL SURPRISE
// ==========================================

function showFinalSurprise() {

    if (surprise) {

        surprise.classList.add(
            "hidden"
        );
    }


    if (finalSection) {

        finalSection.classList.remove(
            "hidden"
        );
    }


    // Final effects

    launchConfetti(180);

    fireworksRunning = true;


    if (birthdayMusic) {

        birthdayMusic.play().catch(
            function () {

                console.log(
                    "Music paused."
                );

            }
        );
    }


    // ======================================
    // FINAL TYPING MESSAGE
    // ======================================

    if (finalTypingText) {

        finalTypingText.textContent = "";

        typeText(

            "May your birthday be as wonderful, beautiful and unforgettable as you are. Happy Birthday, Sunayna! ❤️🎂✨",

            finalTypingText,

            45
        );
    }


    // ======================================
    // FINAL FIREWORKS
    // ======================================

    setTimeout(
        function () {

            createFirework(
                window.innerWidth * 0.25,
                window.innerHeight * 0.25
            );

        },
        300
    );


    setTimeout(
        function () {

            createFirework(
                window.innerWidth * 0.75,
                window.innerHeight * 0.3
            );

        },
        800
    );


    setTimeout(
        function () {

            createFirework(
                window.innerWidth * 0.5,
                window.innerHeight * 0.18
            );

        },
        1300
    );
}


// ==========================================
// 🔄 RESTART
// ==========================================

function restartBirthday() {

    currentStep = 1;


    if (finalSection) {

        finalSection.classList.add(
            "hidden"
        );
    }


    if (welcome) {

        welcome.classList.add(
            "hidden"
        );
    }


    if (surprise) {

        surprise.classList.remove(
            "hidden"
        );
    }


    if (photoBox) {

        photoBox.classList.add(
            "hidden"
        );
    }


    if (birthdayPhoto) {

        birthdayPhoto.src = "";
    }


    if (bigCake) {

        bigCake.classList.add(
            "hidden"
        );
    }


    if (typingBox) {

        typingBox.classList.add(
            "hidden"
        );
    }


    if (finalTypingText) {

        finalTypingText.textContent =
            "";
    }


    showStep(currentStep);

    launchConfetti(70);


    if (birthdayMusic) {

        birthdayMusic.currentTime = 0;

        birthdayMusic.play().catch(
            function () {

                console.log(
                    "Music paused."
                );

            }
        );
    }
}


// ==========================================
// 📤 SHARE BIRTHDAY WISH
// ==========================================

async function shareBirthday() {

    const shareData = {

        title:
            "Happy Birthday Sunayna! 🎂",

        text:
            "🎂✨ I made a special birthday surprise for Sunayna! ❤️ Come check it out!",

        url:
            window.location.href
    };


    // ======================================
    // MODERN SHARE
    // ======================================

    if (
        navigator.share &&
        window.isSecureContext
    ) {

        try {

            await navigator.share(
                shareData
            );

            showShareStatus(
                "Shared successfully! ❤️"
            );

            return;

        } catch (error) {

            if (
                error.name ===
                "AbortError"
            ) {

                return;
            }
        }
    }


    // ======================================
    // CLIPBOARD FALLBACK
    // ======================================

    try {

        await navigator.clipboard.writeText(
            window.location.href
        );

        showShareStatus(
            "Birthday link copied! 📋❤️"
        );

    } catch (error) {

        // Last fallback

        prompt(
            "Copy your birthday website link:",
            window.location.href
        );
    }
}


// ==========================================
// SHARE STATUS
// ==========================================

function showShareStatus(message) {

    if (!shareStatus) {
        return;
    }

    shareStatus.textContent =
        message;


    setTimeout(
        function () {

            shareStatus.textContent =
                "";

        },
        4000
    );
}


// ==========================================
// ❤️ FALLING HEARTS
// ==========================================

function startHeartRain() {

    const heartsContainer =
        document.getElementById(
            "heartsContainer"
        );


    if (!heartsContainer) {
        return;
    }


    setInterval(
        function () {

            const heart =
                document.createElement(
                    "div"
                );


            heart.className =
                "falling-heart";


            const hearts = [

                "❤️",
                "💖",
                "💕",
                "💗",
                "💓",
                "💘",
                "💝"

            ];


            heart.textContent =
                hearts[
                    Math.floor(
                        Math.random() *
                        hearts.length
                    )
                ];


            heart.style.left =
                Math.random() * 100 +
                "%";


            heart.style.fontSize =
                (14 +
                Math.random() * 25) +
                "px";


            heart.style.animationDuration =
                (5 +
                Math.random() * 6) +
                "s";


            heartsContainer.appendChild(
                heart
            );


            setTimeout(
                function () {

                    heart.remove();

                },
                12000
            );

        },
        450
    );
}


// ==========================================
// 🎊 CONFETTI
// ==========================================

function launchConfetti(
    amount = 100
) {

    const container =
        document.getElementById(
            "confettiContainer"
        );


    if (!container) {
        return;
    }


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti";


        const colors = [

            "#ff4f9a",
            "#ffd166",
            "#06d6a0",
            "#4cc9f0",
            "#ffffff",
            "#c77dff",
            "#ff9f1c"

        ];


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.left =
            Math.random() * 100 +
            "%";


        piece.style.width =
            (5 +
            Math.random() * 8) +
            "px";


        piece.style.height =
            (8 +
            Math.random() * 12) +
            "px";


        piece.style.animationDuration =
            (2.5 +
            Math.random() * 3.5) +
            "s";


        piece.style.animationDelay =
            Math.random() * 0.8 +
            "s";


        container.appendChild(
            piece
        );


        setTimeout(
            function () {

                piece.remove();

            },
            7000
        );
    }
}


// ==========================================
// 🎆 FIREWORKS
// ==========================================

const canvas =
    document.getElementById(
        "fireworksCanvas"
    );


const ctx =
    canvas
        ? canvas.getContext("2d")
        : null;


let fireworks = [];
let particles = [];


// ==========================================
// RESIZE CANVAS
// ==========================================

function resizeCanvas() {

    if (!canvas) {
        return;
    }


    canvas.width =
        window.innerWidth;


    canvas.height =
        window.innerHeight;
}


window.addEventListener(
    "resize",
    resizeCanvas
);


resizeCanvas();


// ==========================================
// CREATE FIREWORK
// ==========================================

function createFirework(
    x,
    y
) {

    if (!canvas) {
        return;
    }


    const colors = [

        "#ff4f9a",
        "#ffd166",
        "#ffffff",
        "#c77dff",
        "#4cc9f0",
        "#06d6a0"

    ];


    const color =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const angle =
            (Math.PI * 2 * i) /
            80;


        const speed =
            2 +
            Math.random() * 5;


        particles.push({

            x: x,

            y: y,

            vx:
                Math.cos(angle) *
                speed,

            vy:
                Math.sin(angle) *
                speed,

            life: 1,

            decay:
                0.012 +
                Math.random() * 0.018,

            color:
                color
        });
    }
}


// ==========================================
// FIREWORK ANIMATION
// ==========================================

function animateFireworks() {

    if (
        !ctx ||
        !canvas
    ) {

        return;
    }


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        function (
            particle,
            index
        ) {

            particle.x +=
                particle.vx;


            particle.y +=
                particle.vy;


            particle.vy +=
                0.045;


            particle.life -=
                particle.decay;


            if (
                particle.life <= 0
            ) {

                particles.splice(
                    index,
                    1
                );

                return;
            }


            ctx.globalAlpha =
                particle.life;


            ctx.beginPath();


            ctx.arc(
                particle.x,
                particle.y,
                2,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                particle.color;


            ctx.fill();
        }
    );


    ctx.globalAlpha = 1;


    requestAnimationFrame(
        animateFireworks
    );
}


animateFireworks();


// ==========================================
// AUTOMATIC FIREWORKS
// ==========================================

function startFireworks() {

    if (fireworksRunning) {
        return;
    }


    fireworksRunning = true;


    setInterval(
        function () {

            if (
                !surprise.classList.contains(
                    "hidden"
                ) ||
                !finalSection.classList.contains(
                    "hidden"
                )
            ) {

                createFirework(

                    Math.random() *
                    window.innerWidth,

                    Math.random() *
                    window.innerHeight *
                    0.55
                );
            }

        },
        2200
    );
}


// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        currentStep = 1;


        if (surprise) {

            surprise.classList.add(
                "hidden"
            );
        }


        if (finalSection) {

            finalSection.classList.add(
                "hidden"
            );
        }


        showStep(
            currentStep
        );
    }
);
