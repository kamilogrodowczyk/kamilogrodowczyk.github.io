export default function carousel() {
  const button = document.querySelectorAll(".header__dot[aria-label]");
  const image = document.querySelectorAll(".header__hero--image");
  const heading = document.querySelector(".header__title");
  const paragraph = document.querySelector(".header__paragraph");
  const link = document.querySelector(".header__text");

  const showImage = (attribute) => {
    image.forEach((element) => {
      const attr = element.getAttribute("aria-label");
      if (attr == `${attribute} z 3`) {
        element.classList.add("header__hero--active");
        heading.textContent = element.getAttribute("data-title");
        paragraph.textContent = element.getAttribute("data-text");
        link.href = element.getAttribute("data-link");
      } else {
        element.classList.remove("header__hero--active");
      }
    });
  };

  const clickButton = (target) => {
    button.forEach((element) => {
      if (element.classList.contains("header__dot--active")) {
        element.classList.remove("header__dot--active");
      }
      target.classList.add("header__dot--active");
      element.setAttribute(
        "aria-selected",
        element.classList.contains("header__dot--active"),
      );
    });
  };

  function handleClick(e) {
    const ariaAttribute = this.getAttribute("aria-label");
    showImage(ariaAttribute);
    clickButton(e.currentTarget);
  }

  button.forEach((element) => element.addEventListener("click", handleClick));
}
