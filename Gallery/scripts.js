// Next, Previous button functions
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelector(".carousel").children;
const totalImages = images.length;
let index = 0;

prev.addEventListener("click", () => {
  nextImage("next");
});

next.addEventListener("click", () => {
  nextImage("prev");
});

function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("main");
  }
  images[index].classList.add("main");
}

// Gallery image animations
var galleryImageElements = document.querySelectorAll(".gallery-image");
for (let i = 0; i < galleryImageElements.length; i++) {
  galleryImageElements[i].addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
  });
  galleryImageElements[i].addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
}

// Gallery images zoom and zoom out
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}
