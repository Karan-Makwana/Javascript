var elements = document.querySelectorAll(".elem");
elements.forEach(function (value) {
  const img = value.querySelector("img");
  
  value.addEventListener("mouseenter", function () {
    img.style.opacity = 1;
  });

  value.addEventListener("mouseleave", function () {
    img.style.opacity = 0;
  });

  value.addEventListener("mousemove", function (dets) {
    const rect = value.getBoundingClientRect();
    img.style.left = `${dets.clientX - rect.left}px`;
    img.style.top = `${dets.clientY - rect.top}px`;
  });
});
