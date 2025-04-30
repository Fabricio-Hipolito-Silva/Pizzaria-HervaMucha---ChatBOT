const btnTop = document.getElementById("btnTop");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTop.style.opacity = "1";
    btnTop.style.visibility = "visible";
  } else {
    btnTop.style.opacity = "0";
    btnTop.style.visibility = "hidden";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
