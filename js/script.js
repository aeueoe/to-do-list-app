$(document).ready(function () {
  function newItem() {
    //1. Adding a new task to the list of tasks:
    let inputValue = $("#input").val();
    if (inputValue === "") {
      alert("Write something!");
      return;
    }

    let li = $("<li></li>").text(inputValue);

    //2. Crossing out a task from the list of tasks:
    li.on("dblclick", function () {
      $(this).toggleClass("strike");
    });

    // 3. Adding the edit button:
    let editButton = $("<button>Edit</button>").addClass("editButton");
    li.append(editButton);

    editButton.on("click", function () {
      let newValue = prompt("Edit your task:", inputValue);
      if (newValue) {
        li.contents().first()[0].textContent = newValue;
        inputValue = newValue;
      }
    });

    //4(i). Adding the delete button "X":
    let crossOutButton = $("<button>❌</button>").addClass("deleteButton");
    li.append(crossOutButton);

    crossOutButton.on("click", function () {
      li.addClass("delete");
    });

    // Append the new task to the list
    $("#list").append(li);

    // 6. Reordering the items:
    $("#list").sortable();

    // Reset the input field
    $("#input").val("");
  }

  $("#button").click(newItem);
});
