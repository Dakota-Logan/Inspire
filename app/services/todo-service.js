import store from "../store.js";
import Todo from "../models/Todo.js";


// @ts-ignore
const todoApi = axios.create({
	baseURL: "https://bcw-sandbox.herokuapp.com/api/Dakota/todos/",
	timeout: 8000
});

// global
class TodoService {
	getTodos() {
		todoApi.get()
			.then(res=>{
				let tempTodos =	res.data.data.map(cur=>new Todo(cur));
				store.commit('todos', tempTodos);
			})
			.catch(r=>console.error('Error:', e))
	}
	
	addTodo(data) {
		todoApi.post("", new Todo(data))
			.then(res=>{
				let tempTodos = store.State.todos;
				tempTodos.push(new Todo(res.data.data));
				store.commit('todos', tempTodos);
			})
			.catch(e=>console.error('Error:', e));
	}
	
	
	removeTodo(id) {
		let toRemove = store.State.todos.find(todo => todo._id===id);
	}
	
	disableTodo(id) {
		let toDisable = store.State.todos.find(todo => todo._id===id);
		
	}
}

const todoService = new TodoService();
export default todoService;
