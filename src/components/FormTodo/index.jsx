import { ACTIONS } from '../../context/todosReducer'
import { useEffect } from 'react'
import { FieldComplete } from '..'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import { Field, FormStyled } from './FormStyles'
import {
	useDispatch,
	useStoreTodos,
	useFilterCompleted,
} from '../../context/todosContext'

function FormTask() {
	const [text, setText] = useSessionStorage({
		key: 'taskText',
		initialValue: '',
	})
	const [completeAll, setCompleteAll] = useSessionStorage({
		key: 'completeAll',
		initialValue: false,
	})
	const dispatch = useDispatch()
	const isValid = text.trim() === ''
	const isTodos = useStoreTodos().length === 0
	const IsItemsLeft = useFilterCompleted(false).length > 0

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
		if (isValid && isTodos) return null
		const checked = !isValid ? true : e.target.checked
		if (!isValid) {
			addNewTask()
		}
		dispatch({ type: ACTIONS.TOGGLE_ALL_TASK, payload: { checked } })
		setCompleteAll(checked)
	}

	useEffect(() => {
		if (isTodos || IsItemsLeft) {
			setCompleteAll(false)
		}
		if (!isTodos && !IsItemsLeft) {
			setCompleteAll(true)
		}
	}, [isTodos, IsItemsLeft, setCompleteAll])

	return (
		<FormStyled onSubmit={handleSubmit}>
			<FieldComplete
				checkedValue={completeAll}
				handleOnChange={handleCompleteAll}
				idValue='completeAll'
				nameValue='completeAll'
			/>
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
