if (document.querySelector("button.confirm")) document.querySelector("button.confirm").addEventListener("click", editTodo);

document.querySelectorAll(".deleteTodo").forEach((item) => {
  item.addEventListener("click", deleteTodo);
});

async function editTodo() {
  const todoId = this.attributes.todoid.value;
  const title = document.querySelector("form input").value;
  const content = document.querySelector("form textarea").value;
  try {
    const response = await fetch(`/todo/${todoId}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    const responseData = await response.json();
    alert(responseData.message);
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodo() {
  const todoId = this.attributes.todoId.value;
  try {
    const response = await fetch(`/todo/${todoId}`, {
      method: "delete",
    });
    const responseData = await response.json();
    alert(responseData.message);
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
}
