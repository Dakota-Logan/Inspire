import TodoService from "../services/todo-service.js";
import store from "../store.js";
import QuoteService from "../services/quote-service.js";

function _drawTodos() {
	//TODO Refactor this function, it's ~shite~.
	let drawTo = document.getElementById('todos');
	let toDraw = store.State.todos.map(cur=>cur.template);
	let template = ''; toDraw.forEach(cur=>template+=cur);
	// Not active rn for simplicities sake.
	// drawTo.innerHTML = template;
}

export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		store.subscribe('todos', _drawTodos);
		TodoService.getTodos();
	}
	
	addTodo(event) {
		event.preventDefault();
	// ONLY SCOPES TO THE INPUT FIELD, NOT THE VALUE OF.
		let target = event.target['add-todo'];
	
		TodoService.addTodo({description:target.value, completed:false})
		
	// RESET THE VALUE FOR EASE OF ADDING TODO'S.
		target.value = '';
	}

	todoNegative (id, bool) {
		if(bool){
			TodoService.removeTodo(id);
		} else {
			TodoService.disableTodo(id);
		}
	}
}
