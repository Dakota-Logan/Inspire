export default class Todo {
	constructor (data) {
		this.description = data.description;
		this.completed = data.completed;
		this._id = data._id;
	}
	get template () {
		return `
			<p onclick="app.todoController.todoNegative('${this._id}', false)" class="todo-item" id="${this._id}">${this.description}</p>
			<button type="button" class="todo-remove" onclick="app.todoController.todoNegative('${this._id}', true)">Remove</button>
		`
	}
	get strikenTemplate () {
		return `
			<p onclick="app.todoController.todoNegative('${this._id}', false)" class="todo-item stricken" id="${this._id}">${this.description}</p>
			<button type="button" class="todo-remove" onclick="app.todoController.todoNegative('${this._id}', true)">Remove</button>
		`
	}
}