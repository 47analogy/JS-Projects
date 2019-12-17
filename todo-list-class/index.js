class TodoList {
  constructor() {
    this.todo = [];
    this.done = [];
    this.priority = [];
  }

  addTodo() {
    let todoInput = document.querySelector("#add-todo");
    const priorityBox = document.querySelector("#check-box");

    if (priorityBox.checked) {
      this.rankTodo(this.priority, todoInput.value);
      todoInput.value = "";
      priorityBox.checked = false;
    } else {
      this.rankTodo(this.todo, todoInput.value);
      todoInput.value = "";
    }
  }

  rankTodo(todoRank, value) {
    todoRank.push(value);
    this.displayTodoList(todoRank);
  }

  moveItems(listType, itemIndex) {
    if (listType === "todoList") {
      this.findMoveList(this.todo, this.done, itemIndex);
    }

    if (listType === "doneList") {
      this.findMoveList(this.done, this.todo, itemIndex);
    }
  }

  // determine which list to move from and to
  findMoveList(startList, endList, itemToRemove) {
    let removedItem = startList.splice(itemToRemove, 1);
    endList.push(removedItem[0]);
    this.displayTodoList(endList);
  }

  displayTodoList(listType) {
    //to list
    const todoList = document.querySelector(".todo-list");
    const todoListLI = document.createElement("li");
    todoListLI.classList.add("todo-item");

    // done list
    const doneList = document.querySelector(".done-list");
    const doneListLI = document.createElement("li");
    doneListLI.classList.add("done-item");

    // display various list types
    if (listType === this.todo) {
      listType.map(item => {
        todoListLI.textContent = item;
        todoList.appendChild(todoListLI);
      });
    } else if (listType === this.priority) {
      listType.map(item => {
        this.todo.push(item);
        todoListLI.className = "todo-item-priority";
        todoListLI.textContent = item;
        todoList.prepend(todoListLI);
      });
    } else {
      listType.map(item => {
        doneListLI.textContent = item;
        doneList.appendChild(doneListLI);
      });
    }

    // add listener to each list
    todoListLI.addEventListener("click", event => {
      // grab target element
      if (event.target && event.target.nodeName == "LI") {
        let removeItem = this.todo.indexOf(event.target.textContent);
        this.moveItems("todoList", removeItem);
        event.target.parentNode.removeChild(event.target);
      }
    });

    doneListLI.addEventListener("click", event => {
      if (event.target && event.target.nodeName == "LI") {
        let removeItem = this.done.indexOf(event.target.textContent);
        this.moveItems("doneList", removeItem);
        event.target.parentNode.removeChild(event.target);
      }
    });
  }
}

const list = new TodoList();
