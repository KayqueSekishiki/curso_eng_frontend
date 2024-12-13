$(document).ready(function () {
  $("#add-task").click(function () {
    const taskText = $("#new-task").val().trim();
    if (taskText) {
      const taskItem = `<li class="task-item">
              <input class="task-item-input" type="text" value="${taskText}" disabled>
              <button class="edit-btn">Editar</button>
              <button class="delete-btn">Excluir</button>
          </li>`;
      $("#task-list").append(taskItem);
      $("#new-task").val("");
    }
  });

  $("#task-list").on("click", ".edit-btn, .save-btn", function () {
    const input = $(this).siblings("input");
    if ($(this).hasClass("edit-btn")) {
      input.prop("disabled", false).focus();
      $(this).text("Salvar").removeClass("edit-btn").addClass("save-btn");
    } else if ($(this).hasClass("save-btn")) {
      input.prop("disabled", true);
      input.val(input.val().trim());
      $(this).text("Editar").removeClass("save-btn").addClass("edit-btn");
    }
  });

  $("#task-list").on("click", ".delete-btn", function () {
    $(this).parent().remove();
  });

  $("#task-list").on("click", "input", function () {
    const listItem = $(this).parent();
    listItem.toggleClass("completed");
  });
});
