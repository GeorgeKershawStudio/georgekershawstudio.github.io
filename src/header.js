const toggleBtn = document.getElementById("header-dd-id");
const menu = document.getElementById("header-dd");

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent click from bubbling
  menu.classList.toggle("active");
});

// Close menu when clicking anywhere else
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== toggleBtn) {
    menu.classList.remove("active");
  }
});