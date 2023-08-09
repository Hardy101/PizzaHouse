// Menu Button
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("bars");
  const overlay = document.querySelector(".overlay_screen");
  const sidebar = document.getElementById("sidebar");

  function toggle() {
    menuBtn.classList.toggle("active");
    overlay.classList.toggle("hidden");
    sidebar.classList.toggle("right-0");
    // setTimeout(() => {
    // }, 300);
    sidebar.classList.toggle("right-[-80%]");
  }
  menuBtn.addEventListener("click", toggle);
  overlay.addEventListener("click", toggle);
});
