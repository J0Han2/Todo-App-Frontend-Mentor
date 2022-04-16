import { useStoreTodos } from '../../context/todosContext'
import Task from '../Task'

const TodoList = () => {
	const todos = useStoreTodos()

	if (todos.length === 0) {
		return <p>Not Pending Task</p>
	}

	return (
		<div>
			<ul>
				{todos.map(task => (
					<Task key={task.id} task={task} />
				))}
			</ul>
		</div>
	)
}

export default TodoList
