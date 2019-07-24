const slidingImages = document.querySelectorAll(".sliding");
var slideAllowed = [];
var slidePx = [];
var slideWidths = [];
var totalwidth = 0;
var timer = 100;
// var widthSlider = 0;
for (var j = 0; j < slidingImages.length; j++) {
  slideWidths[j] = slidingImages[j].width + 3;
  totalwidth += slideWidths[j];
  slideAllowed[j] = totalwidth;
  slidePx.push(0);
  // console.log(totalwidth);
}
console.log(slideAllowed);

var i = 0;
transitionFunction();

function transitionFunction() {
  i = i % slidingImages.length;
  // timer = 55;
  // slidingImages[i].style.zIndex = "1";
  for (var k = 0; k < slidingImages.length; k++) {
    slidePx[k] += 10;
    // slidingImages[i].style.zIndex = "2";
    slidingImages[k].style.transform = `translateX(` + -slidePx[k] + `px)`;
    slidingImages[k].style.transition = "transform linear 0.1s";
  }

  setTimeout(() => {
    if (slidePx[i] >= slideAllowed[i]) {
      slidingImages[i].style.zIndex = "-1";
      slidePx[i] -= totalwidth;
      slidingImages[i].style.transform =
        `translateX(` + Math.abs(slidePx[i]) + `px)`;
      slidingImages[i].style.transition = "transform linear 0s";

      timer = 100;
      setTimeout(() => {
        timer = 100;
        slidingImages[i].style.zIndex = "1";
        i++;
      }, 100);
    }

    // console.log(slidePx);
    // transitionFunction();
  }, 100);
  setTimeout(() => {
    console.log(timer);
    transitionFunction();
  }, timer);
}
