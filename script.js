// custome js
const imgs = document.querySelectorAll(".circle-img");
const deskCont = document.querySelector(".desktop-view");
const imgCont = document.querySelector(".img-cert");
imgs.forEach((x) => {
  x.addEventListener("click", () => {
    console.log("hey");
    let imgSrc = x.getAttribute("src");
    imgCont.setAttribute("src", imgSrc);
    document.body.style.overflow = "hidden";
    deskCont.classList.add("show");
  });
});

deskCont.addEventListener("click", () => {
  deskCont.classList.remove("show");
  document.body.style.overflow = "scroll";
});
// ends
