function newItem() {
  //1. Adding a new task to the list of tasks:
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === "") {
    alert("Write something!");
  } else {
    let list = document.querySelector("#list");
    list.appendChild(li);
  }

  //2. Crossing out a task from the list of tasks:
  function crossOut() {
    li.classList.toggle("strike");
  }

  li.addEventListener("dblclick", crossOut);

  // 3. Adding the edit button:
  let editButton = document.createElement("button");
  editButton.appendChild(document.createTextNode("Edit"));
  editButton.className = "editButton";
  li.appendChild(editButton);

  editButton.addEventListener("click", editListItem);

  function editListItem() {
    let newValue = prompt("Edit your task:", inputValue);
    if (newValue) {
      li.childNodes[0].nodeValue = newValue;
      inputValue = newValue;
    }
  }

  //4(i). Adding the delete button "X":
  let crossOutButton = document.createElement("crossOutButton");
  crossOutButton.appendChild(document.createTextNode("❌"));
  li.appendChild(crossOutButton);

  crossOutButton.addEventListener("click", deleteListItem);
  //4(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.classList.add("delete");
  }

  // 6. Reordering the items:
  $("#list").sortable();
}
