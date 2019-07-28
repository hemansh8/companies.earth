var newOrder = 0;
function shiftWidth(element) {
  console.log(element);
  if (element.offsetWidth === 280) {
    element.style.width = "100%";
    element.style.transition = "width 0.7s";
    element.style.order = newOrder++;
  } else {
    element.style.width = "280px";
    element.style.transition = "width 0.7s";
    element.style.order = "10";
    newOrder--;
  }
}
var displayChangeExternal = ["none", "inline"];
// var displayVal=[0,0,0]
var offlink = document.getElementsByClassName("external");

for (var i = 0; i < offlink.length; i++) {
  console.log(offlink[i].parentNode.parentNode);
  // displayVal[i]++;
  // displayVal[i]=displayVal[i]%2;
  offlink[i].parentNode.parentNode.addEventListener(
    "mouseover",
    hoverExternal(i, 1)
  );
  offlink[i].parentNode.parentNode.addEventListener(
    "mouseout",
    hoverExternal(i, 0)
  );
}
function hoverExternal(a, b) {
  return function curreied() {
    offlink[a].style.display = displayChangeExternal[b];
    console.log("hi");
  };
}

// SMOOTH SCROLL
function scrolldown() {
  document.querySelector("#navMain").scrollIntoView({
    behavior: "smooth"
  });
  setTimeout(() => {
    document.querySelector("#homeMain").style.display = "none";
  }, 600);
}
function scrollup() {
  document.querySelector("#homeMain").style.display = "block";
  document.querySelector("#homeMain").scrollIntoView({
    behavior: "smooth"
  });
}

document.querySelectorAll(".nav-link").scrollIntoView({
  behavior: "smooth"
});

document.querySelectorAll(".arrow").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
  });
});
$(document).ready(function() {
  $("body").scrollspy({ target: ".navbar", offset: 100 });
});

//Back highlight

function backgroundHighlight(sec) {
  document.querySelector(sec).classList.add("backHighlight");
  setTimeout(() => {
    document.querySelector(sec).classList.remove("backHighlight");
  }, 1001);
}

//nav close
// $(".navbar-collapse a").click(function() {
//   $(".navbar-collapse").collapse("hide");
// });
