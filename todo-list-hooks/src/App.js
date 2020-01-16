import React from 'react';
import './App.css';
import List from './components/List';

const initialItems = [
  { title: 'Do laundry', prio: false },
  { title: 'Read a book', prio: true },
];
export default function App() {
  const [todoItems, setTodoItems] = React.useState(initialItems);
  const [doneItems, setDoneItems] = React.useState([]);
  const [addTodo, setAddTodo] = React.useState('');
  const [priority, setPriority] = React.useState(false);

  const onClickTodoItem = item => {
    // remove item with title from todoList
    const index = todoItems.findIndex(i => i.title === item.title);
    const newTodoItems = todoItems;
    newTodoItems.splice(index, 1);
    setTodoItems([...newTodoItems]);
    // add item with title to doneList
    setDoneItems([...doneItems, item]);
  };
  const onClickDoneItem = item => {
    // remove item with title from donelist
    // add item with title to todoList
    // add item to top if prio === true
  };
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
          setTodoItems([...todoItems, { title: addTodo, prio: priority }]);
        }}
      >
        <input
          type='text'
          name='new-todo'
          value={addTodo}
          placeholder='New item'
          onChange={event => setAddTodo(event.target.value)}
        />
        <button>Add</button>
        <span>
          <input
            type='checkbox'
            name='prio'
            priority={priority}
            onClick={() => setPriority(!priority)}
          />
          Prio
        </span>
      </form>
      <List title='Todo' items={todoItems} onClickItem={onClickTodoItem} />
      <List title='Done' items={doneItems} onClickItem={onClickDoneItem} />
    </>
  );
}
