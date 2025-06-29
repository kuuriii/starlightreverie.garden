function hide() {
	if (!visiblestate) {
		var visible = document.getElementById("mobileShow2");
		if (visible.hidden === false) {
			visible.hidden = true;
		} else {
			visible.hidden = true;
		}
		visible.classList.remove = ".mobileShow";
		var invisible = document.getElementById("mobileHide2");
		if (invisible.hidden === true) {
			invisible.hidden = false;
		} else {
			invisible.hidden = false;
		}
		invisible.classList.remove = ".mobileHide";
		localStorage.setItem("statevisible", "b");
	} else {
		console.log("Visible flag is set.");
	}
}
var visiblestate = localStorage.getItem("statevisible");
function show() {
	if (visiblestate) {
		const element1 = document.getElementById("mobileShow2");
		element1.hidden = true;
		const element2 = document.getElementById("mobileHide2");
		element2.hidden = false;
	} else {
		console.log("Visible flag is not set.");
	}
}
