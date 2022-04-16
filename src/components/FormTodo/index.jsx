import { useStoreDispatch } from '../../context/todosContext'
import { ACTIONS } from '../../context/todosReducer'
import { useSessionStorage } from '../../hooks/useSessionStorage'

function FormTask() {
	const [text, setText] = useSessionStorage({
		key: 'TaskText',
		initialValue: '',
	})

	const dispatch = useStoreDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		if (text.trim() === '') return null
		dispatch({ type: ACTIONS.ADD_TASK, payload: { text } })
		setText('')
	}

	const handleField = e => setText(e.target.value)

	return (
		<form onSubmit={handleSubmit}>
			<input
				autoComplete='off'
				name='fieldTask'
				onChange={handleField}
				placeholder='Create a new todo...'
				value={text}
				type='text'
			/>
		</form>
	)
}
export default FormTask
