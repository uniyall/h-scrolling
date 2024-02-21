document.addEventListener("DOMContentLoaded", function () {
  const navigate_next = document.getElementById("navigate-next");
  const navigate_prev = document.getElementById("navigate-prev");
  navigate_next.addEventListener("click", () => {
    let scrollDiv = document.querySelector(".scroll-container.snaps-inline");
    scrollDiv.scrollBy({
      top: 0,
      left: 1,
      behavior: "smooth",
    });
  });


  navigate_prev.addEventListener("click", () => {
    let scrollDiv = document.querySelector(".scroll-container.snaps-inline");
    scrollDiv.scrollBy({
      top: 0,
      left: -1,
      behavior: "smooth",
    });
  });
});
