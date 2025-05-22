let items = document.querySelectorAll(".slider .item");
let thumbnails = document.querySelectorAll(".thumbnail .thumb-item");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");

let itemscount = items.length;
let itemActive = 0;

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= itemscount) {
    itemActive = 0;
  }
  showSlider();
};

prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = itemscount - 1;
  }
  showSlider();
};

thumbnails.forEach((thumbnails, index) => {
  thumbnails.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

function showSlider() {
  let itemactiveOld = document.querySelector(".slider .item.active");
  let thumbnailactiveOld = document.querySelector(
    ".thumbnail .thumb-item.active"
  );
  itemactiveOld.classList.remove("active");
  thumbnailactiveOld.classList.remove("active");

  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");
}
