var elements = document.querySelectorAll(".elem");

elements.forEach(function (value) {
  value.addEventListener("mouseenter", function () {
    value.childNodes[3].style.opacity = 1;
  });

  value.addEventListener("mouseleave", function () {
    value.childNodes[3].style.opacity = 0;
  });

  value.addEventListener("mousemove", function (dets) {
    (value.childNodes[3].style.left = dets.x + "px"),
      (value.childNodes[3].style.top = dets.y + "px");
  });
});
