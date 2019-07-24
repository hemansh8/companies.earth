const slidingImages = document.querySelectorAll(".sliding");
var slidePx = [];
var totalwidth = 0;
var widthSlider = 0;
for (var j = 0; j < slidingImages.length; j++) {
  slidePx[j] = slidingImages[j].width;
  totalwidth += slidePx[j];
  console.log(totalwidth);
}
var i = 0,
  j = 1,
  k = 2,
  l = 3;

// // setInterval(() => {
// //   transitionFunction();
// // }, 000);
transitionFunction();

function transitionFunction() {
  i = i % slidePx.length;
  j = j % slidePx.length;
  k = k % slidePx.length;
  l = l % slidePx.length;
  //   //   if (j === 0) {
  //   //     widthSlider = 0;
  //   //   }
  //   widthSlider += slidePx[j];
  //   for (let i = 0; i < slidingImages.length; i++) {
  slidingImages[i].style.transform = `translateX(-100%)`;
  slidingImages[i].style.transition = "transform linear 5s";
  slidingImages[j].style.transform = `translateX(-100%)`;
  slidingImages[j].style.transition = "transform linear 5s";
  slidingImages[k].style.transform = `translateX(-100%)`;
  slidingImages[k].style.transition = "transform linear 5s";
  slidingImages[l].style.transform = `translateX(0%)`;
  slidingImages[l].style.transition = "transform linear 0s";
  slidingImages[l].style.transform = `translateX(-100%)`;
  slidingImages[l].style.transition = "transform linear 0s";

  setTimeout(() => {
    slidingImages[i].style.transform = `translateX(300%)`;
    slidingImages[i].style.transition = "transform linear 0s";
    slidingImages[i].style.transform = `translateX(200%)`;
    slidingImages[i].style.transition = "transform linear 0s";
    slidingImages[j].style.transform = `translateX(-200%)`;
    slidingImages[j].style.transition = "transform linear 5s";
    slidingImages[k].style.transform = `translateX(-200%)`;
    slidingImages[k].style.transition = "transform linear 5s";
    slidingImages[l].style.transform = `translateX(-200%)`;
    slidingImages[l].style.transition = "transform linear 5s";
  }, 5000);

  setTimeout(() => {
    slidingImages[j].style.transform = `translateX(200%)`;
    slidingImages[j].style.transition = "transform linear 0s";
    slidingImages[i].style.transform = `translateX(100%)`;
    slidingImages[i].style.transition = "transform linear 5s";

    slidingImages[j].style.transform = `translateX(100%)`;
    slidingImages[j].style.transition = "transform linear 0s";
    slidingImages[k].style.transform = `translateX(-300%)`;
    slidingImages[k].style.transition = "transform linear 5s";
    slidingImages[l].style.transform = `translateX(-300%)`;
    slidingImages[l].style.transition = "transform linear 5s";
  }, 10000);

  setTimeout(() => {
    slidingImages[k].style.transform = `translateX(100%)`;
    slidingImages[k].style.transition = "transform linear 0s";
    slidingImages[i].style.transform = `translateX(0%)`;
    slidingImages[i].style.transition = "transform linear 5s";
    slidingImages[j].style.transform = `translateX(0%)`;
    slidingImages[j].style.transition = "transform linear 5s";

    slidingImages[k].style.transform = `translateX(0%)`;
    slidingImages[k].style.transition = "transform linear 0s";
    slidingImages[l].style.transform = `translateX(-400%)`;
    slidingImages[l].style.transition = "transform linear 5s";
  }, 15000);

  //   }

  //   setTimeout(() => {
  //     slidingImages[i].style.transform = `translateX(` + totalwidth + `px)`;
  //     slidingImages[i].style.transition = "transform linear 0s";
  //   }, 6000);
  //   i++;
  //   j++;
  //   k++;
  //   l++;
  setTimeout(() => {
    transitionFunction();
  }, 20000);
}

// function changeImage(){

// }
