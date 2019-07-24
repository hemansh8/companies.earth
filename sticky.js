const sticky_list = document.getElementById("stickyList");
window.onload = function() {
  document.getElementById("companyLogo").style.transform = "translateX(0)";
  document.getElementById("companyLogo").style.transition =
    "transform 1.3s ease-out";
};

console.log();
const navBar = document.getElementsByTagName("nav");

var navtop = sticky_list.offsetTop;
function stickyNavigation() {
  //   console.log("navTop = " + navtop);
  console.log("scrollY = " + window.scrollY);

  if (window.scrollY >= 435) {
    sticky_list.classList.remove("container");
  } else {
    sticky_list.classList.add("container");
  }
}

window.addEventListener("scroll", stickyNavigation);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

(function() {
  var sticky_list_item = document.getElementsByClassName("sticky-list-item");
  var section = document.querySelectorAll(".anchor");
  var sections = [];
  var i = 0;
  Array.prototype.forEach.call(section, function(e) {
    sections[i++] = e.offsetTop;
    // console.log(e);
  });
  var offset_value = 425;
  if (window.screen.width < 800) {
    offset_value = 450;
  } else {
    offset_value = 425;
  }

  window.onscroll = function() {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    console.log(sections);
    for (i = 0; i < 3; i++) {
      if (window.scrollY < sections[i] + offset_value) {
        sticky_list_item[i].classList.remove("activate");
      } else if (window.scrollY >= sections[i] + offset_value) {
        sticky_list_item[i].classList.add("activate");
        for (let j = 0; j < i; j++) {
          //   if (j !== i) {
          sticky_list_item[j].classList.remove("activate");
        }
      }
    }
  };
})();
