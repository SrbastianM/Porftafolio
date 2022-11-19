function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("main").style.visibility = "hidden";
  document.body.style.backgroundColor = "#1C1C65";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.visibility = "visible";
  document.body.style.backgroundColor = "#2F2F8A";
}

function moveToHomeSection() {
  window.scrollTo(0, 0);
}

function moveToAboutMeSection() {
  window.scrollTo(0, 500);
}

function moveToExperienceSection() {
  window.scrollTo(0, 1230);
}

function moveToContactSection() {
  window.scrollTo(0, 2500);
}
