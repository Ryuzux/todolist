function addItem() {
    var input = document.getElementById("input");
    var inputValue = input.value.trim();
    if (inputValue !== "") {
        var newItem = createNewItem(inputValue);
        var listContainer = document.getElementById("todolist");
        listContainer.appendChild(newItem);
        input.value = "";
        clearError();
    } else {
        displayError("List must be input");
    }
}

function createNewItem(text) {
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(text));
    newItem.appendChild(createDeleteButton());
    newItem.addEventListener("click", toggleChecked);
    return newItem;
}

function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        this.parentNode.remove();
    };
    return deleteButton;
}

function toggleChecked() {
    this.classList.toggle("check");
    let checkIcon = this.querySelector(".check");
    if (!checkIcon) {
        checkIcon = document.createElement("span");
        checkIcon.textContent = "✅";
        checkIcon.classList.add("check");
        this.appendChild(checkIcon);
    } else {
        checkIcon.remove();
    }
}


