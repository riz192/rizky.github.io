function onSignIn(googleuser) {
  let profile = googleuser.getBasicProfile();
  console.log('full Name: ' + profile.getName());
  console.log("Email: " + profile.getMail());

  let x = document.getElementsByClassName("logged");
  let i;
  for (i = 0; i <= x.length; i++) {
    x[0].classList.remove("logged");
  }
}

function onSignOut() {
  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('user signed out.');
    hideDashboard();
  });
}

function hideDashboard() {
  let x = document.getElementsByClassName("onlylogged");
  let i;
  for (i = 0; i <= x.length; i++) {
    x[i].classList.add("logged");
  }
}

function gotoDashboard() {
  window.location.replace("http://localhost:9000/index.html")
}
