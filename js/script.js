const mq = window.matchMedia("(max-width: 1000px)");

function handleNav(position) {
  if(mq.matches) {
    return document.getElementById("nav").style.transform = `translateX(${position}%)`
  }
}

function openNav() {
  handleNav(0)
}

function closeNav() {
  handleNav(115)
}

function tab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}