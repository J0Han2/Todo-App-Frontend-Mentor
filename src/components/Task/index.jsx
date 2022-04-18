import { TextField } from '..'
import { useDispatch } from '../../context/todosContext'
import { ACTIONS } from '../../context/todosReducer'

function Task({ task }) {
	const { completed, id, text, editing } = task
	const dispatch = useDispatch()

	const deleteTask = () => dispatch({ type: ACTIONS.DEL_TASK, payload: { id } })

	const handleCompleteTask = e => {
		const { checked } = e.target
		dispatch({ type: ACTIONS.COMPLETE_TASK, payload: { checked, id } })
	}

	const openFieldEdit = () => {
		const editing = true
		dispatch({ type: ACTIONS.OPEN_EDITOR, payload: { id, editing } })
	}

	return (
		<li onDoubleClick={openFieldEdit}>
			<div>
				<input
					name='completeTask'
					onChange={handleCompleteTask}
					type='checkbox'
					checked={completed}
				/>
				<span>{text}</span>
				<button onClick={deleteTask}>❌</button>
				<button onClick={openFieldEdit}>🖊️</button>
				<TextField editingTask={editing} task={task} />
			</div>
		</li>
	)
}

export default Task
