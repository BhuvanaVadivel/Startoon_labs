// Example goal percentage (can be dynamic based on performance)
let goalPercentage = 75;

// Set the rotation of the semi-circle based on the goal percentage
let progressElement = document.getElementById('progress');
let progressPercentageElement = document.getElementById('progress-percentage');

let rotationDegree = (goalPercentage / 100) * 180;
progressElement.style.transform = `rotate(${rotationDegree}deg)`;
progressPercentageElement.textContent = `${goalPercentage}%`;
