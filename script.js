const hour_hand = document.querySelector('.hour-hand');
const minute_hand = document.querySelector('.minute-hand');
const second_hand = document.querySelector('.second-hand');
const digital_clock = document.querySelector('.digital-clock');

function setClock() {
	// get the current time
	const now = new Date();

	// calculate the rotation angle for each hand
	let seconds = now.getSeconds();
	const secondDegrees = ((seconds / 60) * 360);
	let minutes = now.getMinutes();
	const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
	let hours = now.getHours();
	const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);

	// set the rotation of each hand
	second_hand.style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`;
	minute_hand.style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
	hour_hand.style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	hours = hours < 10 ? "0" + hours : hours;
	digital_clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}


// call setClock() once to set the initial positions of the hands
setClock();

// call setClock() every second to update the positions of the hands
setInterval(setClock, 1000);