const username = "kuuriii"; // your nekoweb username

const getStats = async () => {
	const request = await fetch(
		`https://nekoweb.org/api/site/info/${username}`,
	);
	const json = await request.json();

	// formats the date
	const updatedDate = new Date(json.updated_at);
	const updated = `${updatedDate.getMonth() + 1}/${updatedDate.getDate()}/${updatedDate.getFullYear()}`;

	const createdDate = new Date(json.created_at);
	const created = `${createdDate.getMonth()}/${createdDate.getDate()}/${createdDate.getFullYear()}`;

	// change the exclemation marks to before and after texts. for example turn
	// !!!! ${json.views} !!!! into
	// you are my ${json.views}th visitor

	document.getElementById("visitors").innerHTML = `!!!! ${json.views} !!!!`;
	document.getElementById("created").innerHTML = `!!!! ${created} !!!!`;
	document.getElementById("updated").innerHTML = `!!!! ${updated} !!!!`;
	document.getElementById("followers").innerHTML =
		`!!!! ${json.followers} !!!!`;
};
getStats();
