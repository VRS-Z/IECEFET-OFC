<<<<<<< HEAD
window.onscroll = function () {
  const button = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
};

document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
=======
window.onscroll = function () {
  const button = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
};

document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
>>>>>>> a60ad4fe0c97e36d9f84ff521cbb4aa90a7eb999
