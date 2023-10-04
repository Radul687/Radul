// Import stylesheets
import './style.css';

// import modules
import Todos from './todos';
import { userCredentials } from './userCredentials';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Todo List</h1>`;

const todos: Todos = {
  userId: userCredentials.userId,
  todos: [],
};

// create a script to print a list of the todos
console.log(todos);

