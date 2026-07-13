function openLetter() {

    const opening = document.getElementById("opening");
    const letter = document.getElementById("letterSection");
    const music = document.getElementById("music");


    opening.style.display = "none";

    letter.style.display = "block";


    // play music kapag binuksan ang letter
    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Music needs user interaction.");
    });

}



/*
 Relationship timer
 Start date:
 May 14, 2025
*/


const startDate = new Date("May 14, 2025 00:00:00");


function updateTimer() {

    const now = new Date();


    let difference = now - startDate;


    const seconds = Math.floor(difference / 1000);

    const minutes = Math.floor(seconds / 60);

    const hours = Math.floor(minutes / 60);

    const days = Math.floor(hours / 24);



    const months = Math.floor(days / 30);

    const remainingDays = days % 30;

    const remainingHours = hours % 24;

    const remainingMinutes = minutes % 60;

    const remainingSeconds = seconds % 60;



    document.getElementById("count").innerHTML =
    `${months} months, ${remainingDays} days,
    ${remainingHours} hours,
    ${remainingMinutes} minutes,
    ${remainingSeconds} seconds
    together 💙`;

}



updateTimer();

setInterval(updateTimer, 1000);
