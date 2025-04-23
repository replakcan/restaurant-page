function MenuCard(item, img) {
  const menuCard = document.createElement("div");
  const cardHeading = document.createElement("h2");
  cardHeading.textContent = item;
  const cardImg = document.createElement("img");

  cardImg.src = img;

  menuCard.appendChild(cardHeading);

  menuCard.classList.add("menu-card");

  menuCard.appendChild(cardImg);

  return menuCard;
}

export default MenuCard;
