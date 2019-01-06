// const newTodo = document.querySelector("#enter-todo");
const submitBtn = document.querySelector("#submit-todo");
const todoList = document.querySelector(".display-todos");
const form = document.querySelector("#todo-form");

// add a new todo
const newTodo = () => {
	// read input value
	const todo = document.querySelector("#enter-todo").value;

	// create li element
	const li = document.createElement("li");
	li.textContent = todo; // add todo as text content

	// create remove btn as an anchor tag
	const removeBtn = document.createElement("a");
	removeBtn.classList.add("remove-btn"); // add classname for remove btn
	removeBtn.textContent = "X"; // add text for remove btn

	// add button to li element
	li.appendChild(removeBtn);

	// add to todo list
	todoList.appendChild(li);

	// call to add to local storage
	addTodoLocalStorage(todo);

	// alert user that todo is added
	alert("todo is added");

	// clear the form
	form.reset();
};

// remove todo
const removeTodo = e => {
	e.preventDefault();
	if (e.target.className === "remove-btn") {
		e.target.parentElement.remove(); // remove parent element (li)
	}
	// console.log(e.target.parentElement.textContent);
	removeLocalStorage(e.target.parentElement.textContent); // calls function to remove todo from local storage
};

// stores todo in local storage
const addTodoLocalStorage = todo => {
	// create reference to get todos from getTodoFromLocalStorage function
	let todos = getTodoFromLocalStorage();

	// add the todo to the todos array
	todos.push(todo);

	// convert todos array to a string
	localStorage.setItem("todos", JSON.stringify(todos));
};

// gets todos already in local storage
// if no todos exist then creates empty array to store them
const getTodoFromLocalStorage = () => {
	let todos;
	let todosStored = localStorage.getItem("todos");

	if (todosStored === null) {
		todos = [];
	} else {
		// need to parse to turn string into array (object)
		todos = JSON.parse(todosStored);
	}
	return todos;
};

// loads and displays items from local storage when page refreshes
const loadLocalStorage = () => {
	let todos = getTodoFromLocalStorage(); // create reference to get todos from getTodoFromLocalStorage function

	// loop thru storage and print todos
	todos.forEach(todo => {
		// create li element
		const li = document.createElement("li");
		li.textContent = todo; // add todo as text content

		// create remove btn as an anchor tag
		const removeBtn = document.createElement("a");
		removeBtn.classList.add("remove-btn"); // add classname for remove btn
		removeBtn.textContent = "X"; // add text for remove btn

		// add button to li element
		li.appendChild(removeBtn);

		// add to todo list
		todoList.appendChild(li);
	});
};

// removes todo item from local storage
const removeLocalStorage = todo => {
	let todos = getTodoFromLocalStorage(); // create reference to get todos from getTodoFromLocalStorage function

	// remove X from the todo
	const todoDelete = todo.substring(0, todo.length - 1);

	//loop thru todo and remove the todo
	todos.forEach(function(todoLS, index) {
		if (todoDelete === todoLS) {
			todos.splice(index, 1);
		}
	});

	// save the data to local storage
	localStorage.setItem("todos", JSON.stringify(todos));
};

// event listeners
const eventListeners = () => {
	submitBtn.addEventListener("click", newTodo); // detect if submit btn is clicked
	todoList.addEventListener("click", removeTodo); // detect if remove btn is clicked
	// DOMContentLoaded fires when HTML document loads
	document.addEventListener("DOMContentLoaded", loadLocalStorage); // load items in local storage
};

eventListeners();
