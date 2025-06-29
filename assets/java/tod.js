var now = new Date();
var today = now.getDay();
var startTime = new Date();
startTime.setHours(7);
startTime.setMinutes(0);
startTime.setSeconds(0);
var endTime = new Date();
endTime.setHours(19);
endTime.setMinutes(0);
endTime.setSeconds(0);

if (today > 0 && today < 6) {
	if (startTime < now && endTime > now) {
		document.write('<img src="/assets/img/backdrop_night.png">');
	} else {
		document.write('<img src="/assets/img/backdrop_day.png">');
	}
} else {
	document.write('<img src="/assets/img/backdrop_day.png">');
}
