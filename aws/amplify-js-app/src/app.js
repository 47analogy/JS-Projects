//const { default: Amplify } = require("aws-amplify")
import Amplify, { API, graphqlOperation } from '@aws-amplify/api'
import awsconfig from './aws-exports'
import { createTodo } from './graphql/mutations'
import {listTodos} from './graphql/queries'

Amplify.configure(awsconfig)



async function createNewTodo() {
    const todo = {
        name: "Rock AWS",
        description: "Become an expert"
    }
    return await API.graphql(graphqlOperation(createTodo, {input: todo}))
}

async function getData() {
    API.graphql(graphqlOperation(listTodos)).then((event) => {
        event.data.listTodos.items.map((todo, i) => {
            QueryResult.innerHTML += `<p>${todo.name} - ${todo.description}</p>`
        })
    })
}

const MutationButton = document.querySelector('#MutationEventButton')
const MutationResult = document.querySelector('#MutationResult')
const QueryResult = document.querySelector('#QueryResult')

MutationButton.addEventListener('click', (event) => {
    createNewTodo().then((event) => {
    MutationResult.innerHTML += `<p>${event.data.createTodo.name} - ${event.data.createTodo.description}</p>`
    })
})

getData()