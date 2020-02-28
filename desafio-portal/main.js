const entertainmentBtnElement = document.querySelector('#entertainment');
const sportsBtnElement = document.querySelector('#sports');
const newsBtnElement = document.querySelector('#news');

entertainmentBtnElement.addEventListener("mouseover", showSubMenu);
entertainmentBtnElement.addEventListener("mouseout", hideSubMenu);

sportsBtnElement.addEventListener("mouseover", showSubMenu);
sportsBtnElement.addEventListener("mouseout", hideSubMenu);

newsBtnElement.addEventListener("mouseover", showSubMenu);
newsBtnElement.addEventListener("mouseout", hideSubMenu);

function showSubMenu() {
  this.children[1].style.display = "block";
}

function hideSubMenu () {
  this.children[1].style.display = "none";
}

