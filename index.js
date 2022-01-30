let activeButton = document.querySelector(".active");
const navLinks = document.querySelectorAll(".nav-link");

for (const navLink of navLinks) {
    navLink.addEventListener("click", () => {
        activeButton.classList.remove("active");
        navLink.classList.add("active");
        activeButton = navLink;
    });
}
