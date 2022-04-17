function FieldChecked({ checkedValue, handleOnChange, idValue, nameValue }) {
	return (
		<div>
			<input
				checked={checkedValue}
				id={idValue}
				name={nameValue}
				onChange={handleOnChange}
				type='checkbox'
			/>
			<label htmlFor={idValue}></label>
		</div>
	)
}

export default FieldChecked

/* 
import { useEffect } from 'react'
import { useStoreDispatch, useStoreTodos } from '../../context/todosContext'
import { ACTIONS } from '../../context/todosReducer'
import { useSessionStorage } from '../../hooks/useSessionStorage'

const string = 'string'

function FieldChecked({ addNewTask }) {
	const [completeAll, setCompleteAll] = useSessionStorage({
		key: 'completeAll',
		initialValue: false,
	})

	const todos = useStoreTodos()
	const dispatch = useStoreDispatch()

	const handleCompleteAll = e => {
		const item = window.sessionStorage.getItem('taskText')
		const taskText = item ? JSON.parse(item) : ''
		const isValid = typeof taskText === string && taskText.trim() === ''
		let { checked } = e.target
		const counterTodos = todos.length
		const itemsLeft = () =>
			todos.filter(task => (task.completed === false ? task : null)).length

		console.log(`${itemsLeft()} itemsLeft`, counterTodos)
		if (isValid && todos.length === 0) return null
		if (!isValid) {
			addNewTask()
			checked = true
			console.log((completeAll && counterTodos === 0) || itemsLeft() > 0)
			// if ((completeAll && counterTodos === 0) || itemsLeft() > 0) {
		}
		dispatch({ type: ACTIONS.COMPLETE_ALL, payload: { checked } })
		setCompleteAll(checked)
	}

	useEffect(() => {
		if (todos.length === 0) {
			setCompleteAll(false)
		}
	}, [])

  		if (!completeAll && itemsLeft === 0 && CountTodos > 0) {
			setCompleteAll(false)
		}
		if ((completeAll && todos.length === 0) || itemsLeft > 0) {
			setCompleteAll(false)
		}

	return (
		<div>
			<input
				checked={completeAll}
				id='completeAll'
				name='completeAll'
				onChange={handleCompleteAll}
				type='checkbox'
			/>
			<label htmlFor='completeAll'></label>
		</div>
	)
}

export default FieldChecked

 */
