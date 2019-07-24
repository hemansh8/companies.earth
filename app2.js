const slidingImages = document.querySelectorAll(".sliding");
var slidePx = [];
var slideWidths = [];
var totalwidth = 0;
var widthSlider = 0;
for (var j = 0; j < slidingImages.length; j++) {
  slideWidths[j] = slidingImages[j].width;
  totalwidth += slideWidths[j];
  slidePx.push("0");
  //   console.log(totalwidth);
}
// console.log(slidePx);

var i = 0;
transitionFunction();

function transitionFunction() {
  i = i % slidingImages.length;
  for (let k = 0; k < slidingImages.length; k++) {
    slidePx[k] -= slideWidths[i];
    slidingImages[k].style.transform = `translateX(` + slidePx[k] + `px)`;
    slidingImages[k].style.transition = "transform linear 5s";
  }

  setTimeout(() => {
    slidePx[i] += totalwidth;
    slidingImages[i].style.transform = `translateX(` + slidePx[i] + `px)`;
    slidingImages[i].style.transition = "transform linear 0s";
    i++;
  }, 6000);

  setTimeout(() => {
    transitionFunction();
  }, 7000);
}
