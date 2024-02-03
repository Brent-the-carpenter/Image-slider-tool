import "./style.css";
import leftArrow from "./arrow-left.svg";
import rightArrow from "./arrow-right.svg";
import One from "./img1.jpeg";
import Two from "./img2.jpeg";
import Three from "./img3.jpeg";
let currentImageIndex = 0;
let imgOne = new Image();
imgOne.src = One;

let imgTwo = new Image();
imgTwo.src = Two;

let imgThree = new Image();
imgThree.src = Three;

let imageArray = [imgOne, imgTwo, imgThree];

function imageSlider(elementTOAppendTO, imageArray) {
  let apphendToThis = document.querySelector(elementTOAppendTO);
  let imageContainer = document.createElement("div");
  imageContainer.setAttribute("id", "imgContainer");

  let rightButton = document.createElement("button");
  rightButton.setAttribute("id", "rightButton");

  let leftButton = document.createElement("button");
  leftButton.setAttribute("id", "leftButton");

  let currentImage = new Image();
  currentImage.setAttribute("id", "currentImage");
  currentImage.src = imageArray[currentImageIndex].src;
  const left = new Image();
  left.src = leftArrow;

  const right = new Image();
  right.src = rightArrow;

  leftButton.addEventListener("click", () => {
    if (currentImageIndex === 0) {
      currentImageIndex = imageArray.length - 1;
      console.log(currentImageIndex);
    } else {
      currentImageIndex = currentImageIndex - 1;
      console.log(currentImageIndex);
    }
    currentImage.classList.add("slideRight");
    setTimeout(() => {
      currentImage.classList.remove("slideRight");
    }, "800");

    setTimeout(() => {
      currentImage.src = imageArray[currentImageIndex].src;
      currentImage.classList.add("newImage");
    }, "800");
    setTimeout(() => {
      currentImage.classList.remove("newImage");
    }, "100");
  });

  rightButton.addEventListener("click", () => {
    console.log(currentImageIndex);
    currentImage.classList.add("slideLeft");
    setTimeout(() => {
      currentImage.classList.remove("slideLeft");
    }, "800");
    if (currentImageIndex === imageArray.length - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex += 1;
    }
    console.log(currentImageIndex);

    setTimeout(() => {
      currentImage.src = imageArray[currentImageIndex].src;
      currentImage.classList.add("newImage");
    }, "800");
    setTimeout(() => {
      currentImage.classList.remove("newImage");
    }, "100");
  });

  leftButton.appendChild(left);
  rightButton.appendChild(right);
  imageContainer.appendChild(currentImage);
  apphendToThis.appendChild(imageContainer);
  apphendToThis.appendChild(leftButton);
  apphendToThis.appendChild(rightButton);
}

imageSlider("body", imageArray);
