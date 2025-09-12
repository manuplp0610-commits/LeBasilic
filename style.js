const images = document.querySelectorAll(".imgg, .imgd");
const imggs = document.querySelectorAll(".imgg"); // toutes les images imgg
const imgds = document.querySelectorAll(".imgd"); // toutes les images imgg
const phone = document.querySelector(".tel");

images.forEach((image) => {
  image.addEventListener("mousedown", () => {
    image.style.transform = "scale(2)";
    image.style.zIndex = "10";
  });

  image.addEventListener("mouseup", () => {
    image.style.transform = "scale(1)";
    image.style.zIndex = "1";
  });

  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
    image.style.zIndex = "1";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 500 && window.scrollY <= 1000) {
    imggs.forEach((imgg) => {
      imgg.classList.add("imggla");
      imgg.classList.remove("imggpla");
    });
  } else {
    imggs.forEach((imgg) => {
      imgg.classList.add("imggpla");
      imgg.classList.remove("imggla");
    });
  }
  if (window.scrollY >= 600 && window.scrollY <= 1100) {
    imgds.forEach((imgd) => {
      imgd.classList.add("imgdla");
      imgd.classList.remove("imgdpla");
    });
  } else {
    imgds.forEach((imgd) => {
      imgd.classList.add("imgdpla");
      imgd.classList.remove("imgdla");
    });
  }
});
