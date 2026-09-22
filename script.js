// Cricket Tube - JavaScript

// Mobile menu
function toggleMenu() {
    const menu = document.getElementById("navMenu");

    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}


// Watch Live button
function showLiveMatches() {
    const liveSection = document.getElementById("live");

    liveSection.scrollIntoView({
        behavior: "smooth"
    });
}


// Watch Match
function watchMatch() {
    alert(
        "🔴 Live Match\n\nLive streaming will be added in the next version of Cricket Tube."
    );
}


// Open Short
function openShort(title) {
    alert(
        "🎥 " + title + "\n\nShort video player will be added soon."
    );
}


// Close menu after clicking a link
document.querySelectorAll(".nav-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        const menu = document.getElementById("navMenu");

        menu.classList.remove("show");

    });

});


// Demo live score update
function updateDemoScore() {

    const score = document.querySelector(".score strong");

    if (!score) return;

    let runs = 186;

    setInterval(function() {

        runs += Math.floor(Math.random() * 2);

        score.textContent = "IND " + runs + "/4";

    }, 10000);
}


// Start demo score
updateDemoScore();


// Welcome message
console.log("🏏 Cricket Tube loaded successfully!");
