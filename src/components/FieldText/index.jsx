import { useEffect, useRef, useState } from 'react'
import { useDispatch } from '../../context/todosContext'
import { ACTIONS } from '../../context/todosReducer'

function FieldText({ editingTask, task }) {
	const [text, setText] = useState(task?.text)
	const emptyTask = text.trim() === ''
	const fieldRef = useRef(null)
	const dispatch = useDispatch()
	const handleFieldText = e => setText(e.target.value)

	const removeEmptyTask = () =>
		dispatch({ type: ACTIONS.DEL_TASK, payload: { id: task?.id } })

	const handleCloseField = () => {
		if (emptyTask) return removeEmptyTask()
		const editing = false
		dispatch({ type: ACTIONS.OPEN_EDITOR, payload: { id: task?.id, editing } })
	}

	const handleKeyDown = e => {
		const key = e.key.toLocaleLowerCase()
		if (key === 'escape') return handleCloseField()
		if (key !== 'enter') return null
		if (emptyTask) return removeEmptyTask()
		const prevTask = { ...task, editing: false, text }
		dispatch({ type: ACTIONS.EDITING, payload: { prevTask } })
	}

	useEffect(() => {
		if (editingTask) {
			fieldRef.current.focus()
		}
	}, [editingTask])

	return (
		<input
			autoComplete='off'
			name='fieldEditing'
			onBlur={handleCloseField}
			onChange={handleFieldText}
			onKeyDown={handleKeyDown}
			ref={fieldRef}
			value={text}
			type='text'
		/>
	)
}

export default FieldText
