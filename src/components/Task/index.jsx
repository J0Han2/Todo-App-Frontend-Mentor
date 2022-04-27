import { ACTIONS } from '../../hooks/useStorageTodos'
import { useDispatch } from '../../context/todosContext'
import { TextField, FieldComplete } from '..'
import { ListItem, BtnCustom, ItemText } from './TaskStyles'

function Task({ task }) {
	const { completed, id, text, editing } = task
	const dispatch = useDispatch()

	const deleteTask = () => dispatch({ type: ACTIONS.DEL_TASK, payload: { id } })

	const toggleTask = () =>
		dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id } })

	const openFieldEdit = () =>
		dispatch({ type: ACTIONS.OPEN_EDITOR, payload: { id, editing: true } })

	return (
		<ListItem>
			<div className='container'>
				<FieldComplete
					checkedValue={completed}
					handleOnChange={toggleTask}
					idValue={id}
					nameValue='completeTask'
				/>
				<ItemText
					className={completed ? 'completed' : null}
					onDoubleClick={openFieldEdit}
				>
					{text}
				</ItemText>
			</div>
			<BtnCustom className='delete' onClick={deleteTask} />
			<button className='edit' onClick={openFieldEdit} />
			<TextField editingTask={editing} task={task} />
		</ListItem>
	)
}

export default Task
