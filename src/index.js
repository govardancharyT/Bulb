import "./styles.css";

var bulbswitch = document.querySelector(".ckeckbox");
var bulb = document.querySelector(".circle");

bulbswitch.addEventListener("click", () => {
  if (bulbswitch.checked === false) {
    // this.checked = true;
    bulbswitch.setAttribute("checked", "checked");
    bulb.classList.remove("on");
    bulb.classList.add("off");
  } else {
    bulbswitch.removeAttribute("checked");
    bulb.classList.remove("off");
    bulb.classList.add("on");
  }
});
