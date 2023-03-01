const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const itemList = document.getElementById("itemList");

addButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeAllItems);

function addItem() {
	const itemInput = document.getElementById("itemInput");
	const newItem = document.createElement("div");
	newItem.classList.add("item");
	newItem.innerText = itemInput.value;
	itemList.appendChild(newItem);
	itemInput.value = "";
}

function removeAllItems() {
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
}
