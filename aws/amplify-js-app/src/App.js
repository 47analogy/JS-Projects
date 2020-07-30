import React, {useState, useEffect} from "react";
import Amplify, { Auth, API, graphqlOperation } from '@aws-amplify/api'
import awsconfig from './aws-exports'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { onCreateTodo } from './graphql/subscriptions'
//import regeneratorRuntime from "regenerator-runtime"

Amplify.configure(awsconfig)
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState('')

  useEffect(() => {
    getData()
  }, [])


  async function getData() {
    API.graphql(graphqlOperation(listTodos)).then((res) => {
        setTodos(res.data.listTodos.items)
    })
  }
  

  return (
    <div className="App">{todos ? todos.map(todo => {
      return (
        <ul key={todo.id}>
          <li>{todo.name} - {todo.description}</li>
        </ul>
      )
   }) : null}
   </div>
  )
};

export default App;