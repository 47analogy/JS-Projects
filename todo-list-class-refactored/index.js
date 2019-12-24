class TodoList {
  constructor() {
    this.todoList = [];
    this.doneList = [];
  }

  createTodo() {
    const todoInput = document.querySelector("#input-field");
    const priorityCheckbox = document.querySelector("#priority-checkbox");
    const addButton = document.querySelector("#add-todo-button");

    addButton.onclick = () => {
        this.addTodoItem(todoInput.value, priorityCheckbox.checked);
        todoInput.value = "";
        priorityCheckbox.checked = false;
    }
  };

  refreshAllLists() {
    const todoListItems = document.querySelector("#todo-list");
    const doneListItems = document.querySelector("#done-list");
    // empty both lists
    todoListItems.textContent = "";
    doneListItems.textContent = "";

    this.todoList.map((todoItem, index) => {
        const item = document.createElement("li");
        item.textContent = todoItem.title;
        item.onclick = () => this.clickTodoItem(todoItem, index);
        if (todoItem.priority) {
            item.className = "priority";
            todoListItems.insertBefore(item, todoListItems.firstChild);
        } else {
            todoListItems.appendChild(item);
        }
    });

    this.doneList.map((doneItem, index) => {
        doneItem.index = index;
        const item = document.createElement('li');
        item.className = "done-item";
        item.textContent = doneItem.title;
        item.onclick = () => this.clickDoneItem(doneItem, index);
        doneListItems.appendChild(item);
    });
  };

  addTodoItem (title, priority) {
    this.todoList.push({ title, priority })
    this.refreshAllLists();
  };

  clickTodoItem (item, index) {
    this.todoList.splice(index, 1);
    this.doneList.push(item)
    this.refreshAllLists();
  };

  clickDoneItem (item, index) {
    this.doneList.splice(index, 1);
    this.todoList.push(item)
    this.refreshAllLists();
  };

  main () {
    this.createTodo();
    this.refreshAllLists();
  };
};

let  list = new TodoList();
list.main()