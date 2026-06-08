// 인벤토리 불러오기
let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

// 골드
let gold = Number(localStorage.getItem("gold")) || 100;

function saveGame(){
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("gold", gold);
}

function addItem(item){
    inventory.push(item);
    saveGame();
    displayInventory();
}

function displayInventory(){
    const list = document.getElementById("inventory");

    if(!list) return;

    list.innerHTML = "";

    inventory.forEach(item=>{
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    const goldText = document.getElementById("gold");

    if(goldText){
        goldText.textContent = gold;
    }
}

function buyItem(item, price){

    if(gold >= price){
        gold -= price;
        inventory.push(item);

        saveGame();
        displayInventory();

        alert(item + " 구매 완료!");
    }
    else{
        alert("골드 부족!");
    }
}

window.onload = displayInventory;
