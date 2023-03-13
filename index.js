function newImage(imgTemplate) {
  let newIcon = document.createElement("img");
  newIcon.src = imgTemplate[0];
  newIcon.style.position = "fixed";
  newIcon.style.left = imgTemplate[1];
  newIcon.style.bottom = imgTemplate[2];
  document.body.append(newIcon);
}

function newItem(itmTemplate) {
  let newPickUpItem = document.createElement("img");
  newPickUpItem = itmTemplate[0];
  newPickUpItem = "fixed";
  newPickUpItem = itmTemplate[1];
  newPickUpItem = itmTemplate[2];
  document.body.append(newPickUpItem);
  newPickUpItem.addEventListener("click", function () {
    newPickUpItem.remove();
  });
}

const greenCharacter = ["assets/green-character.gif", "100px", "100px"];
const pineTree = ["assets/pine-tree.png", "450px", "200px"];
const roundTree = ["assets/tree.png", "200px", "300px"];
const pillar = ["assets/pillar.png", "350px", "100px"];
const crate = ["assets/crate.png", "150px", "200px"];
const well = ["assets/well.png", "500px", "425px"];

const sword = ["assets/sword.png", "500px", "405px"];

newImage(greenCharacter);
newImage(pineTree);
newImage(roundTree);
newImage(pillar);
newImage(crate);
newImage(well);

newItem(sword);
