const searchFun = () => {
	let filter = document.getElementById('searchBar').value.toUpperCase();
	let col = document.getElementById('movie-section');
	let eachCard = col.getElementsByClassName('mt-2');
	let flag = 0;
	for (var i = 0; i < eachCard.length; i++) {
		let name = eachCard[i].getElementsByTagName('h6')[0];
		if (name) {
			let textValue = name.innerText;
			
			if (textValue.toUpperCase().indexOf(filter) > -1) {
				eachCard[i].style.display = "";
			} else {
				eachCard[i].style.display = "none";
				flag = flag + 1;
				
			}
		}
	}
	var moviesection = document.getElementById('moviesectionfail');
	if (flag == eachCard.length) {
		let filter = document.getElementById('searchBar').value;
		moviesection.style.display = "";
		moviesection.innerHTML = "No Result Found with : " + "'" + filter + "'";
	} else {
		moviesection.style.display = "none";
	}
}