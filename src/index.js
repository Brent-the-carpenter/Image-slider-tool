import "./style.css";
import Icon from "./menu.svg";

function addNavBar(elementToAppendTo, numberOfItems) {
  const Nav = document.createElement("nav");
  const Ul = document.createElement("ul");
  const Li = document.createElement("li");
  const myIcon = new Image();
  myIcon.src = Icon;
  let i = 1;
  let addNavToThis = document.querySelector(elementToAppendTo);
  Nav.setAttribute("id", "nav");

  addNavToThis.appendChild(Nav);
  Nav.appendChild(Ul);
  Ul.appendChild(Li);
  Li.appendChild(myIcon);
  Li.appendChild(document.createElement("ul")).setAttribute(
    "class",
    "drop-menu"
  );
  while (i <= numberOfItems) {
    let menu = document.querySelector(".drop-menu");
    menu
      .appendChild(document.createElement("li"))
      .setAttribute("id", `menu-item-${i}`);
    document.querySelector(`#menu-item-${i}`).textContent = `item ${i}`;
    i++;
  }
}

export { addNavBar };
