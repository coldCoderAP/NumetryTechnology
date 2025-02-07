document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check localStorage for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.classList.add("dark-mode-btn");
        themeToggle.innerText = "Switch to Light Mode";
    } else {
        themeToggle.classList.add("light-mode-btn");
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerText = "Switch to Light Mode";
            themeToggle.classList.remove("light-mode-btn");
            themeToggle.classList.add("dark-mode-btn");
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerText = "Switch to Dark Mode";
            themeToggle.classList.remove("dark-mode-btn");
            themeToggle.classList.add("light-mode-btn");
        }
    });
});
