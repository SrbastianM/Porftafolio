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
