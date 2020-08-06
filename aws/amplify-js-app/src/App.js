import React, {useState, useEffect} from "react"
import Amplify, { Auth, API, graphqlOperation } from '@aws-amplify/api'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import awsconfig from './aws-exports'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { onCreateTodo } from './graphql/subscriptions'
//import regeneratorRuntime from "regenerator-runtime"
Amplify.configure(awsconfig)
import "./App.css"



const App = () => {
  const [addTodo, setAddTodo] = React.useState('');
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getData()
  }, [])


  async function getData() {
    API.graphql(graphqlOperation(listTodos)).then((res) => {
        setTodos(res.data.listTodos.items)
    })
  }
  

  return (
    <div className="App">
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log("Submitted todo =>", addTodo)
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
      </form>
      <div>
        {todos ? todos.map(todo => {
          return (
            <ul key={todo.id}>
              <li>{todo.name} - {todo.description}</li>
            </ul>
          )
       }) : null}
      </div>  
   </div>
  )
};

export default withAuthenticator(App);