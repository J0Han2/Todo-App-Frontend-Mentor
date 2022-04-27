import { ACTIONS } from '../../hooks/useStorageTodos'
import { useDispatch } from '../../context/todosContext'
import { useEffect, useRef, useState } from 'react'
import { FieldEditText,WrapperField } from './FieldTextStyles'

function FieldText({ editingTask, task }) {
	const [text, setText] = useState(task?.text)
	const fieldRef = useRef(null)
	const dispatch = useDispatch()
	const emptyTask = text.trim() === ''
	const handleFieldText = e => setText(e.target.value)

	const removeEmptyTask = () =>
		dispatch({ type: ACTIONS.DEL_TASK, payload: { id: task?.id } })

	const handleCloseField = () => {
		if (emptyTask) return removeEmptyTask()
		dispatch({
			type: ACTIONS.OPEN_EDITOR,
			payload: { id: task?.id, editing: false },
		})
		setText(task.text)
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
		<WrapperField isShow={editingTask}>
			<FieldEditText
				autoComplete='off'
				name='fieldEditing'
				onBlur={handleCloseField}
				onChange={handleFieldText}
				onKeyDown={handleKeyDown}
				ref={fieldRef}
				value={text}
				type='text'
			/>
		</WrapperField>
	)
}

export default FieldText
