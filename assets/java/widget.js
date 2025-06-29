// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (è’œ) house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = window.location.href; //get the url of the site we're currently on
thisIndex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
	if (thisSite.startsWith(sites[i])) {
		//we use startswith so this will match any subdirectory, users can put the widget on multiple pages
		thisIndex = i;
		break; //when we've found the site, we don't need to search any more, so stop the loop
	}
}

function randomSite() {
	otherSites = sites.slice(); //create a copy of the sites list
	otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
	randomIndex = Math.floor(Math.random() * otherSites.length);
	location.href = otherSites[randomIndex];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
	tag.insertAdjacentHTML(
		"afterbegin",
		`
<table style="font-family:cirno;border:2px white solid;width:130px;border-radius:10px;background: white url(https://glassplanet.neocities.org/webring/touhou/widget/hifuu/hifuu-bg.jpg);background-size:100% 100%;border-radius:10px;color:white;
text-shadow:black 1px 1px 1px, black -1px -1px 1px, black -1px 1px 1px, black 1px -1px 1px, black 2px 2px 1px;margin-top:5px;margin-bottom:5px;">
  <tr>
    <td><a style="color:white;text-decoration-line: none;" href="https://glassplanet.neocities.org/webring/touhou/"><div style="font-size:24px;text-align:center;padding:6px;" title="This site has not been added to the Touhou Webring. "><div style="font-size:19px"><b><img style="width:100%" src="https://glassplanet.neocities.org/webring/touhou/webringlogo.png"><br></div><img src="https://glassplanet.neocities.org/webring/touhou/yinyangorb.gif" style="padding-bottom:10px;"><br>Loading...</div></a></td>
  </tr>
</table>
  `,
	);
} else {
	//find the 'next' and 'previous' sites in the ring. this code looks complex
	//because it's using a shorthand version of an if-else statement to make sure
	//the first and last sites in the ring join together correctly
	previousIndex = thisIndex - 1 < 0 ? sites.length - 1 : thisIndex - 1;
	nextIndex = thisIndex + 1 >= sites.length ? 0 : thisIndex + 1;

	indexText = "";
	//if you've chosen to include an index, this builds the link to that
	if (useIndex) {
		indexText = `<a href='${indexPage}'>index</a> | `;
	}

	randomText = "";
	//if you've chosen to include a random button, this builds the link that does that
	if (useRandom) {
		randomText = `<a style="color:white;text-decoration-line: none;" href='javascript:void(0)' onclick='randomSite()'>
    <img alt="Random" style="width:auto;height:27px;" src="https://glassplanet.neocities.org/webring/touhou/circle.webp">
    </a>`;
	}
}
