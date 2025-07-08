document.addEventListener("DOMContentLoaded", () => {
    const root = document.body;
    const themeToggle = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "dark") {
        root.classList.add("dark");
        themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
    }

    themeToggle?.addEventListener("click", () => {
        root.classList.toggle("dark");
        const isDark = root.classList.contains("dark");

        localStorage.setItem("theme", isDark ? "dark" : "light");

        themeToggle.querySelector("i").classList.toggle("fa-moon");
        themeToggle.querySelector("i").classList.toggle("fa-sun");
    });
});
