/* =========================
   VARIABLES
========================= */

let enteredCode = "";

const correctCode = "1906";


/* =========================
   PAGE CHANGE
========================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });

    document.getElementById(pageId).classList.add("active");

}


/* =========================
   PASSCODE
========================= */

function pressKey(key) {

    if (enteredCode.length >= 4) {
        return;
    }

    enteredCode += key;

    updatePasscode();

    if (enteredCode.length === 4) {

        setTimeout(checkCode, 400);

    }

}


function updatePasscode() {

    for (let i = 1; i <= 4; i++) {

        const dot =
            document.getElementById("dot" + i);

        if (i <= enteredCode.length) {

            dot.classList.add("filled");

        } else {

            dot.classList.remove("filled");

        }

    }

}


function checkCode() {

    const wrongText =
        document.getElementById("wrongText");

    if (enteredCode === correctCode) {

        wrongText.innerText = "";

        createConfetti();

        setTimeout(() => {

            showPage("questionPage");

        }, 600);

    } else {

        wrongText.innerText =
            "Wrong passcode 😭 Try again";

        enteredCode = "";

        updatePasscode();

    }

}


/* =========================
   YES BUTTON
========================= */

function yesClicked() {

    createConfetti();

    const title =
        document.getElementById("questionTitle");

    title.innerText =
        "I made something special for u ❤️";

    setTimeout(() => {

        showPage("wishPage");

    }, 1000);

}


/* =========================
   NO BUTTON
========================= */

function noClicked() {

    showPage("whyPage");

}


/* =========================
   TRY AGAIN
========================= */

function tryAgain() {

    showPage("questionPage");

}


/* =========================
   MEMORIES
========================= */

function showMemories() {

    createConfetti();

    setTimeout(() => {

        showPage("memoryPage");

    }, 800);

}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHeart() {

    const container =
        document.querySelector(".hearts");

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.innerHTML =
        Math.random() > 0.5 ? "❤️" : "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createFloatingHeart, 700);


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    const symbols = [
        "❤️",
        "💗",
        "💕",
        "✨",
        "💖",
        "🌸",
        "🎀"
    ];

    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";

        piece.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (12 + Math.random() * 18) + "px";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        container.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 5500);

    }

}


/* =========================
   ENTER KEY SUPPORT
========================= */

document.addEventListener("keydown", function(event) {

    if (
        event.key >= "0" &&
        event.key <= "9"
    ) {

        pressKey(event.key);

    }

});
