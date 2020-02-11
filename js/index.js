var db = firebase.firestore();

function spaceinvaders(){

	var spaceinvadersCIN = document.getElementById("spaceInvadersMemberCIN").value;
	var spaceInvadersName = document.getElementById("spaceInvadersMemberName").value;
	// var spaceInvadersSecretCode = document.getElementById("spaceInvadersSecretCode").value;

	if(spaceInvadersName.length && spaceinvadersCIN.length != 0){
		db.collection("Space Invaders").doc().set({
			name:spaceInvadersName,
			cin:spaceinvadersCIN,
			// code:spaceInvadersSecretCode
		})
		.then(function(docRef) {
			window.alert("Check In Successful");
			clearSpaceInvaders();
		})	
	}
	else{
		window.alert("All fields are required")
	}
}

function web(){
	var webMemberName = document.getElementById("webMemberName").value;
	var webMemeberCIN = document.getElementById("webMemberCIN").value;
	// var accordSecretCode = document.getElementById("accordSecretCode").value;

	if(webMemberName.length && webMemeberCIN != 0){
		db.collection("Web Dev").doc().set({
			name:webMemberName,
			cin:webMemeberCIN,
			// code:accordSecretCode

		})
		.then(function(docRef) {
			window.alert("Check In Successful");
			clearWeb();
		})
	}
	else{
		window.alert("All fields are required")
	}
}

function clearWeb(){
	document.getElementById('webMemberName').value = '';
	document.getElementById('webMemberCIN').value = '';
}

function clearSpaceInvaders(){
	document.getElementById('spaceInvadersMemberCIN').value = '';
	document.getElementById('spaceInvadersMemberName').value = '';
}

const list_div_spaceInvaders = document.querySelector("#list_div_spaceInvaders");

db.collection("Space Invaders").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			list_div_spaceInvaders.innerHTML += "<div class='list-item-spaceInvaders'><h3>" + doc.data().name + "\n" + doc.data().cin + "</h3></div>"
        });
});

const list_div_web = document.querySelector("#list_div_web");

db.collection("Web Dev").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			list_div_web.innerHTML += "<div class='list-item-web'><h3>" + doc.data().name + "\n" + doc.data().cin + "</h3></div>"
        });
});