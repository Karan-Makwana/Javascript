var isstatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    isstatus.innerHTML = "Friends";
    isstatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "#dadada";
    btn.style.color = "#111";
    check = 1;
  } else {
    isstatus.innerHTML = "Stranger";
    isstatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "#35c235";
    btn.style.color = "#fff";
    check = 0;
  }
});
