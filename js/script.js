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