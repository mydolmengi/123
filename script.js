let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
let gold = Number(localStorage.getItem("gold")) || 100;

function saveGame() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("gold", gold);
}

function addItem(item) {
    inventory.push(item);
    saveGame();
    alert(item + " 획득!");
}

function buyItem(item, price) {
    if (gold >= price) {
        gold -= price;
        inventory.push(item);
        saveGame();
        alert(item + " 구매 완료!");
        updateGoldText();
    } else {
        alert("골드가 부족합니다!");
    }
}

function updateGoldText() {
    const goldText = document.getElementById("gold");
    if (goldText) {
        goldText.textContent = gold;
    }
}

function displayInventory() {
    const list = document.getElementById("inventoryList");
    if (!list) return;

    list.innerHTML = "";

    if (inventory.length === 0) {
        const li = document.createElement("li");
        li.textContent = "인벤토리가 비어 있습니다.";
        list.appendChild(li);
        return;
    }

    inventory.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${item}`;
        list.appendChild(li);
    });

    updateGoldText();
}

window.onload = function () {
    updateGoldText();
    displayInventory();
};
