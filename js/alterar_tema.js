document.getElementById("darkmode").addEventListener('click', function () {
    document.getElementById("header-css").href = "css/darkmode/header.css";
    document.getElementById("main-css").href = "css/darkmode/main.css";
    document.getElementById("footer-css").href = "css/darkmode/footer.css";
})

document.getElementById("lightmode").addEventListener('click', function () {
    document.getElementById("header-css").href = "css/lightmode/header.css";
    document.getElementById("main-css").href = "css/lightmode/main.css";
    document.getElementById("footer-css").href = "css/lightmode/footer.css";
})