function openLetter() {
    const opening = document.getElementById("opening");
    const letter = document.getElementById("letterSection");
    const music = document.getElementById("music");

    // Open envelope
    opening.style.display = "none";

    // Show letter section
    letter.style.display = "block";

    // Play music
    if (music) {
        music.play().catch(() => {
            console.log("Music waiting for user interaction.");
        });
    }

    // Scroll to letter
    letter.scrollIntoView({
        behavior: "smooth"
    });
}


// Relationship timeline
const startDate = new Date("2025-05-14T00:00:00");

function updateCounter() {
    const now = new Date();

    let months = (now.getFullYear() - startDate.getFullYear()) * 12;
    months += now.getMonth() - startDate.getMonth();

    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const counter = document.getElementById("count");

    if (counter) {
        counter.innerHTML =
            `${months} months, ${days} days<br>
            ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
}


setInterval(updateCounter, 1000);
updateCounter();
