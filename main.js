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
    var newItem = document.createElement("li");
    newItem.appendChild(createDeleteButton());
    newItem.appendChild(document.createTextNode(text));
    newItem.addEventListener("click", toggleChecked);
    return newItem;
}

function createDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        this.parentNode.remove();
    };
    return deleteButton;
}

function toggleChecked() {
    this.classList.toggle("check");
}

function displayError(errorMessage) {
    var errorElement = document.getElementById("error");
    errorElement.textContent = errorMessage;
}

function clearError() {
    var errorElement = document.getElementById("error");
    errorElement.textContent = "";
}
