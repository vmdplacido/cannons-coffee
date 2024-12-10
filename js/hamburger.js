console.log("hello");

const ul = document.querySelector("nav ul");

console.log(ul);

const burgerButton = document.getElementById("burger-button");

console.log(burgerButton);

console.log(burgerButton);

const menuCloseIcon = document.getElementById("menu-close");

const menuOpenIcon = document.getElementById("menu-open");
console.log(menuOpenIcon);

console.log(menuOpenIcon);

function handleHamburgerButtonClick() {
  console.log("button clicked");
  console.log("button clicked");
  ul.classList.toggle("visible");

  menuCloseIcon.classList.toggle(visible);

  menuOpenIcon.classList.toggle(visible);
}
burgerButton.addEventListener("click", handleHamburgerButtonClick);
