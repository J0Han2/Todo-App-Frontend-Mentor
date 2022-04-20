import { ACTIONS } from '../../context/todosReducer'
import { useDispatch } from '../../context/todosContext'
import { ListItem, WrapperField, BtnCustom, BtnEdit } from './TaskStyles'
import { TextField, FieldComplete } from '..'

function Task({ task }) {
	const { completed, id, text, editing } = task
	const dispatch = useDispatch()

	const deleteTask = () => dispatch({ type: ACTIONS.DEL_TASK, payload: { id } })

	const handleCompleteTask = e => {
		const { checked } = e.target
		dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { checked, id } })
	}

	const openFieldEdit = () => {
		const editing = true
		dispatch({ type: ACTIONS.OPEN_EDITOR, payload: { id, editing } })
	}
	return (
		<ListItem>
			<div className='container'>
				<FieldComplete
					checkedValue={completed}
					handleOnChange={handleCompleteTask}
					idValue={id}
					nameValue='completeTask'
				/>
				<span onDoubleClick={openFieldEdit}>{text}</span>
			</div>
			<BtnCustom onClick={deleteTask} />
			<BtnEdit onClick={openFieldEdit} />
			<WrapperField isShow={editing}>
				<TextField editingTask={editing} task={task} />
			</WrapperField>
		</ListItem>
	)
}

export default Task
