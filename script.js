let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

function saveInventory() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function defeatMonster() {
    inventory.push("몬스터 젤리");
    saveInventory();
    alert("몬스터 젤리를 얻었다!");
}

function resetInventory(){

      alert("버튼 클릭됨!");


    inventory = [];

    saveInventory();

    showInventory();

    alert("인벤토리가 초기화되었습니다.");

}

function showInventory() {
    const list = document.getElementById("inventoryList");
    if (!list) return;

    list.innerHTML = "";

    if (inventory.length === 0) {
        const li = document.createElement("li");
        li.textContent = "인벤토리가 비어 있습니다.";
        list.appendChild(li);
        return;
    }

    inventory.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

window.onload = function () {
    showInventory();
};

