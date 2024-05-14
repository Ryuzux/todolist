document.addEventListener("DOMContentLoaded", function() {
    var initialTasks = ["Buy groceries", "Do laundry", "Call mom"];
    var listContainer = document.getElementById("todolist");
    initialTasks.forEach(function(taskText) {
        var newItem = createNewItem(taskText);
        listContainer.appendChild(newItem);
    });
});

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

    let textSpan = document.createElement("span");
    textSpan.textContent = text;
    newItem.appendChild(textSpan);

    newItem.appendChild(createDeleteButton());
    newItem.appendChild(createEditButton(textSpan));
    newItem.addEventListener("click", toggleChecked);
    return newItem;
}

function createDeleteButton() {
    let deleteButton = document.createElement("button");
    let iconDel = document.createElement("i");
    iconDel.classList.add("fa-solid", "fa-trash");
    deleteButton.appendChild(iconDel);
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };
    return deleteButton;
}

function createEditButton(textSpan) {
    let editButton = document.createElement("button");
    let iconEdit = document.createElement("i");
    iconEdit.classList.add("fa-regular", "fa-pen-to-square");
    editButton.appendChild(iconEdit);
    editButton.classList.add("edit");
    editButton.onclick = function(event) {
        event.stopPropagation(); 

        let input = document.createElement("input");
        input.type = "text";
        input.value = textSpan.textContent;
        input.classList.add("edit-input");

        textSpan.replaceWith(input);
        input.focus();

        input.onblur = function() {
            let newText = input.value.trim();
            if (newText !== "") {
                textSpan.textContent = newText;
            }
            input.replaceWith(textSpan); 
        };
        input.onkeydown = function(event) {
            if (event.key === "Enter") {
                input.blur();
            }
        };
    };
    return editButton;
}

function toggleChecked() {
    this.classList.toggle("check");
    let checkIcon = this.querySelector(".fa-check");
    if (!checkIcon) {
        checkIcon = document.createElement("i");
        checkIcon.classList.add("fa-solid", "fa-check", "fa-fade");
        this.appendChild(checkIcon);
    } else {
        checkIcon.remove();
    }
}

function clearError() {
    let errorElement = document.getElementById("error");
    errorElement.textContent = "";
}

function displayError(message) {
    let errorElement = document.getElementById("error");
    errorElement.textContent = message;
}
