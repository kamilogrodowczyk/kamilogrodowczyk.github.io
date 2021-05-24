export default function zoomPhoto() {
  const images = document.querySelectorAll(
    ".realisation__image, .realisation__image--big",
  );
  const example = document.querySelector(".emptyElement");
  const fragment = document.createDocumentFragment();

  images.forEach((image, index) =>
    image.addEventListener("click", (e) => {
      let currentIndex = index;

      createBlackBackground(fragment);
      const rightArrow = createRightArrow(fragment);
      const leftArrow = createLeftArrow(fragment);

      createZoomImage(images[currentIndex]);

      if (!currentIndex) leftArrow.disabled = true;
      if (currentIndex >= images.length - 1) rightArrow.disabled = true;

      const cancelButton = createCancelButton(fragment);
      example.appendChild(fragment);

      rightArrow.addEventListener("click", () => {
        currentIndex += 1;
        createZoomImage(images[currentIndex], images[currentIndex - 1]);
        leftArrow.disabled = false;
        if (currentIndex >= images.length - 1) rightArrow.disabled = true;
      });

      leftArrow.addEventListener("click", () => {
        currentIndex -= 1;
        if (!currentIndex) leftArrow.disabled = true;
        createZoomImage(images[currentIndex], images[currentIndex + 1]);
        rightArrow.disabled = false;
      });

      cancelButton.addEventListener("click", () => {
        removeElements(example, images[currentIndex]);
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          removeElements(example, images[currentIndex]);
        }
      });
    }),
  );
}

const createBlackBackground = (fragmentElement) => {
  const element = document.createElement("div");
  element.className = "realisation__zoom realisation__zoom--active";
  fragmentElement.appendChild(element);
};

const createZoomImage = (imageToClick, previousImageToClick = null) => {
  const style = window.getComputedStyle(imageToClick);
  const backgroundImage = style.getPropertyValue("background-image");
  const zoomChild = document.createElement("div");
  if (imageToClick.classList.contains("realisation__image--big")) {
    zoomChild.className =
      "realisation__wrapper realisation__image--big--active";
  } else {
    zoomChild.className = "realisation__wrapper realisation__image--active";
  }
  if (zoomChild.style.backgroundImage) {
    zoomChild.style.backgroundImage = imageToClick.style.backgroundImage;
  } else {
    zoomChild.style.backgroundImage = backgroundImage;
  }
  imageToClick.appendChild(zoomChild);
  previousImageToClick
    ? previousImageToClick.removeChild(previousImageToClick.children[0])
    : null;
};

const createLeftArrow = (fragmentElement) => {
  const leftArrow = document.createElement("button");
  leftArrow.textContent = "<";
  leftArrow.className = "imageLeftArrow";
  fragmentElement.appendChild(leftArrow);

  return leftArrow;
};

const createRightArrow = (fragmentElement) => {
  const rightArrow = document.createElement("button");
  rightArrow.textContent = ">";
  rightArrow.className = "imageRightArrow";
  fragmentElement.appendChild(rightArrow);

  return rightArrow;
};

const createCancelButton = (fragmentElement) => {
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "X";
  cancelButton.className = "realisation__wrapper--cancel";
  fragmentElement.appendChild(cancelButton);

  return cancelButton;
};

const removeElements = (elementHTML, parent) => {
  elementHTML.innerHTML = "";
  parent.innerHTML = "";
};
