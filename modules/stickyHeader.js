const navbar = document.querySelector(".nav");
const header = document.querySelector(".header");

export default function stickyHeader() {
  const sticky = () => {
    const halfOfHeader = header.offsetHeight / 2;
    if (window.scrollY > halfOfHeader) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  };
  window.addEventListener("scroll", sticky);
}
