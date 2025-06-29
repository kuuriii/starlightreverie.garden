function getOrdinalSuffix(day) {
	if (day > 3 && day < 21) return "th!"; // special case for 11th to 19th
	switch (day % 10) {
		case 1:
			return "st!";
		case 2:
			return "nd!";
		case 3:
			return "rd!";
		default:
			return "th!";
	}
}

function updateDateAndTime() {
	const date = new Date();

	// Greetings based on the time of day
	const hour = date.getHours();
	let greeting;
	if (hour < 12) {
		greeting = "morning,";
	} else if (hour < 18) {
		greeting = "afternoon,";
	} else if (hour < 22) {
		greeting = "evening,";
	} else if (hour < 0) {
		greeting = "night,"
	}
	document.getElementById("greetings").innerText = greeting;

	// Month names
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const dayNames = [
		"Sunday,",
		"Monday,",
		"Tuesday,",
		"Wednesday,",
		"Thursday,",
		"Friday,",
		"Saturday,",
	];

	// Get current month, day number, and day of the week
	const month = monthNames[date.getMonth()];
	const dayNum = date.getDate();
	const day = dayNames[date.getDay()];
	const ordinalSuffix = getOrdinalSuffix(dayNum);

	// Update HTML elements
	document.getElementById("month").innerText = month;
	document.getElementById("daynum").innerText = dayNum + ordinalSuffix;
	document.getElementById("day").innerText = day;

	// Update the time every second
	const timeElement = document.querySelector(".display-time");
	const updateTime = () => {
		const now = new Date();
		timeElement.innerText = now.toLocaleTimeString();
	};
	setInterval(updateTime, 1000);
	updateTime(); // Initial call to display the time immediately
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", updateDateAndTime);

function getBrowserGreeting() {
	var userAgent = navigator.userAgent;
	var greeting =
		"Looks like you're using an unknown browser... how mysterious!";

	if (userAgent.indexOf("Firefox") > -1) {
		greeting = "Looks like you're using Firefox, good choice!";
	} else if (
		userAgent.indexOf("Chrome") > -1 &&
		userAgent.indexOf("Edg") === -1
	) {
		greeting =
			"Looks like you're using Chrome — do you mean to? ╮(￣ω￣;)╭";
	} else if (
		userAgent.indexOf("Safari") > -1 &&
		userAgent.indexOf("Chrome") === -1
	) {
		greeting =
			"Looks like you're using Safari... interesting choice! σ(￣、￣〃)";
	} else if (userAgent.indexOf("Edg") > -1) {
		greeting = "Looks like you're using Microsoft Edge, but why...?";
	} else if (userAgent.indexOf("OPR") > -1) {
		greeting =
			"Looks like you're using Opera, did you know there's other browsers?";
	}

	return greeting;
}

function displayGreeting() {
	var greetingMessage = getBrowserGreeting();
	document.getElementById("greeting").textContent = greetingMessage;
}

window.onload = displayGreeting;
