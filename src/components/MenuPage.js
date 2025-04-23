import MenuCard from "./MenuCard";
import menu0 from "../images/menu0.png";
import menu1 from "../images/menu1.png";
import menu2 from "../images/menu2.png";
import menu3 from "../images/menu3.png";
import menu4 from "../images/menu4.png";
import menu5 from "../images/menu5.png";

function MenuPage() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-div");

  const menu = [
    { name: "Astro Burger", img: menu0 },
    { name: "Galactic sushi", img: menu1 },
    { name: "Quantum Noodles", img: menu2 },
    { name: "Neon Salad", img: menu3 },
    { name: "Plasma Skewers", img: menu4 },
    { name: "Cyber Slice", img: menu5 },
  ];

  const menuTitle = document.createElement("h1");

  menuTitle.textContent = "MENU";

  menu.map((item) => menuDiv.appendChild(MenuCard(item.name, item.img)));

  content.appendChild(menuTitle);
  content.appendChild(menuDiv);
}

export default MenuPage;
