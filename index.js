document.addEventListener("DOMContentLoaded", function () {
  const navigate_next = document.getElementById("navigate-next");
  const navigate_prev = document.getElementById("navigate-prev");
  let scrollDiv = document.querySelector(".scroll-container.snaps-inline");
  const slider = document.querySelector(".slider");
  const navButtons = document.querySelectorAll(".navb-sec button");
  const refBtn = document.getElementById("nav-to-1");
  const refBtnRec = refBtn.getBoundingClientRect();



  navigate_next.addEventListener("click", () => {
    scrollDiv.scrollBy({
      top: 0,
      left: 1,
    });
  });

  navigate_prev.addEventListener("click", () => {
    scrollDiv.scrollBy({
      top: 0,
      left: -1,
    });
  });

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonRect = button.getBoundingClientRect();
      const sliderRect = slider.getBoundingClientRect();
      console.log(buttonRect);
      const left = Math.abs(buttonRect.left - refBtnRec.left);
      console.log(left);
      slider.style.transform = `translate(${left}px, 0)`;
    });
  });
});
