import { Task } from '..'
import { List } from './ListStyles'

const TodoList = ({ todos }) => {
	if (todos.length === 0) return <p>Not Pending Task</p>

	return (
		<List>
			{todos.map(task => (
				<Task key={task.id} task={task} />
			))}
		</List>
	)
}

export default TodoList
