export default class Todo {
	constructor (data) {
		this.description = data.description;
		this.completed = data.completed;
		this._id = data._id;
	}
	get template () {
		return `
			<p onclick="app.todoController.todoNegative('${this.id}', false)" class="todo-item" id="${this.id}">${this.description}</p>
			<button type="button" class="todo-remove" onclick="app.todoController.todoNegative(${this.id}, true)">Remove</button>
		`
	}
	get strikedTemplate () {
		return `
			<p onclick="app.todoController.todoNegative('${this.id}', false)" class="todo-item strikethrough" id="${this.id}">${this.description}</p>
		`
	}
}