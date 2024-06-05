document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-target");
      if (target) {
        window.location.href = target;
      }
    });
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  console.log("Navbar is Open");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  console.log("Navbar is Close");
}
