function handleKeyPress(event) {
  const spaceKeyCode = 32; // Spacebar keycode
  const arrowDownKeyCode = 40; // Arrow down keycode

  // Check if the pressed key is spacebar or arrow down
  if (event.keyCode === spaceKeyCode || event.keyCode === arrowDownKeyCode) {
    // Prevent the default scroll behavior
    event.preventDefault();

    // Get the current scroll position
    const currentPosition = window.pageYOffset;

    // Calculate the target scroll position (50 pixels below the current position)
    const targetPosition = currentPosition + 700;

    // Scroll smoothly to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Attach the key press event listener to the document
document.addEventListener("keydown", handleKeyPress);

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
    sidebar.classList.toggle("right-[-40%]");
  }
  menuBtn.addEventListener("click", toggle);
  overlay.addEventListener("click", toggle);
});
