// ======================================
// PREMIUM WEDDING OPENING
// ======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    const heroLogo =
        document.getElementById("heroLogo");

    const heroText =
        document.getElementById("heroText");

    // Curtains Opening

    setTimeout(() => {

        // Hero Logo Appear

        heroLogo.classList.add("show");

    }, 5200);

    // Names Reveal

    setTimeout(() => {

        heroText.classList.add("show");

    }, 6500);

    // Remove Loader

    setTimeout(() => {

        loader.style.transition =
            "opacity 1s ease";

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 5800);

});

// ======================================
// COUNTDOWN
// ======================================

const targetDate =
new Date(
"October 18, 2026 19:00:00"
).getTime();

function updateCountdown(){

    const now =
    new Date().getTime();

    const distance =
    targetDate - now;

    if(distance < 0){

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        return;
    }

    const days =
    Math.floor(
        distance /
        (1000*60*60*24)
    );

    const hours =
    Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );

    document.getElementById("days").innerHTML =
    String(days).padStart(2,"0");

    document.getElementById("hours").innerHTML =
    String(hours).padStart(2,"0");

    document.getElementById("minutes").innerHTML =
    String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerHTML =
    String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);

// ======================================
// SECTION REVEAL
// ======================================

function revealSections(){

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(
            revealTop <
            windowHeight - revealPoint
        ){

            section.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

// ======================================
// PROGRESS BAR
// ======================================

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
        document.documentElement.scrollTop;

        const scrollHeight =
        document.documentElement.scrollHeight
        -
        document.documentElement.clientHeight;

        const progress =
        (scrollTop / scrollHeight) * 100;

        document.getElementById(
            "progressBar"
        ).style.width =
        progress + "%";

    }
);

// ======================================
// HERO FADE EFFECT
// ======================================

window.addEventListener(
    "scroll",
    () => {

        const hero =
        document.querySelector(".hero");

        const value =
        window.scrollY;

        hero.style.opacity =
        1 - (value / 1000);

    }
);

// ======================================
// GOLD HOVER
// ======================================

const cards =
document.querySelectorAll(
".event-card,.family-card,.count-box"
);

cards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.boxShadow =
            "0 20px 45px rgba(197,163,106,.35)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.06)";
        }
    );

});