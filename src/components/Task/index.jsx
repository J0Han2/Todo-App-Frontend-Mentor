import { useStoreDispatch } from '../../context/todosContext'
import { ACTIONS } from '../../context/todosReducer'

function Task({ task }) {
	const { completed, id, text } = task
	const dispatch = useStoreDispatch()

	const handleCompleteTask = e => {
		const { checked } = e.target
		dispatch({ type: ACTIONS.COMPLETE_TASK, payload: { checked, id } })
	}

	const handleDeleteTask = () => {
		dispatch({ type: ACTIONS.DEL_TASK, payload: { id } })
	}

	return (
		<li>
			<div>
				<input
					name='completeTask'
					onChange={handleCompleteTask}
					type='checkbox'
					checked={completed}
				/>
				<span>{text}</span>
				<button onClick={handleDeleteTask}>❌</button>
				<button>🖊️</button>
			</div>
		</li>
	)
}

export default Task
