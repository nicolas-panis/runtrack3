const footer = document.querySelector('footer');

document.addEventListener("scroll", () => {
    scroll = window.scrollY;
    val = scroll/4096;
    footer.style.opacity = val;
  
});