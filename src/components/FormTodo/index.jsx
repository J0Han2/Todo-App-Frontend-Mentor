import { ACTIONS } from '../../hooks/useStorageTodos'
import { FieldCompleteAll } from '..'
import { useSessionSg } from '../../hooks'
import { Field, FormStyled } from './FormStyles'
import { useDispatch } from '../../context/todosContext'

function FormTask() {
	const [text, setText] = useSessionSg({
		key: 'taskText',
		initialValue: '',
	})
	const dispatch = useDispatch()

	const handleField = e => setText(e.target.value)

	const addNewTask = () => {
		dispatch({ type: ACTIONS.ADD_TASK, payload: { text } })
		setText('')
	}

	const handleSubmit = e => {
		e.preventDefault()
		return text.trim() === '' ? null : addNewTask()
	}

	return (
		<FormStyled onSubmit={handleSubmit}>
			<FieldCompleteAll text={text} addTask={addNewTask} />
			<Field
				autoComplete='off'
				name='fieldTask'
				onChange={handleField}
				placeholder='Create a new todo...'
				value={text}
				type='text'
			/>
		</FormStyled>
	)
}
export default FormTask
