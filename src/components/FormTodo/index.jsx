import { useEffect } from 'react'
import { useDispatch, useStoreTodos, useFilterCompleted, } from '../../context/todosContext'
import { ACTIONS } from '../../context/todosReducer'
import { useSessionStorage } from '../../hooks/useSessionStorage'

function FormTask({ FieldChecked }) {
	const [text, setText] = useSessionStorage({
		key: 'taskText',
		initialValue: '',
	})
	const [completeAll, setCompleteAll] = useSessionStorage({
		key: 'completeAll',
		initialValue: false,
	})

	const dispatch = useDispatch()
	const todos = useStoreTodos()
	const itemsLeft = useFilterCompleted(false).length
	const isValid = text.trim() === ''

	const handleField = e => setText(e.target.value)
	const addNewTask = () => {
		dispatch({ type: ACTIONS.ADD_TASK, payload: { text } })
		setText('')
	}
	const handleSubmit = e => {
		e.preventDefault()
		return isValid ? null : addNewTask()
	}
	const handleCompleteAll = e => {
		if (isValid && todos.length === 0) return null
		const checked = !isValid ? true : e.target.checked
		const addTaskCompleted = !isValid ? addNewTask() : null
		dispatch({ type: ACTIONS.COMPLETE_ALL, payload: { checked } })
		setCompleteAll(checked)
	}

	useEffect(() => {
		if (todos.length === 0 || itemsLeft > 0) {
			setCompleteAll(false)
		}
		if (todos.length !== 0 && itemsLeft < 1) {
			setCompleteAll(true)
		}
	}, [todos])

	return (
		<form onSubmit={handleSubmit}>
			<FieldChecked
				checkedValue={completeAll}
				handleOnChange={handleCompleteAll}
				idValue='completeAll'
				nameValue='completeAll'
			/>
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
