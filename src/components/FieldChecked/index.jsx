import { useEffect } from 'react'
import FieldView from './fieldView'
import { useSessionSg } from '../../hooks'
import { ACTIONS } from '../../hooks/useStorageTodos'
import { useDispatch, useFilterCt, useTodos } from '../../context/todosContext'

function FieldChecked({ text, addTask }) {
	const [completeAll, setCompleteAll] = useSessionSg({
		key: 'completeAll',
		initialValue: false,
	})

	const dispatch = useDispatch()
	const isTodos = useTodos().length === 0
	const IsItemsLeft = useFilterCt(false).length > 0
	const isValid = text.trim() === ''

	const handleCompleteAll = e => {
		if (isValid && isTodos) return null
		const isAddTak = () => (!isValid ? addTask() : null)
		const checked = !isValid ? true : e.target.checked
		isAddTak()
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
		<FieldView
			checkedValue={completeAll}
			handleOnChange={handleCompleteAll}
			idValue='completeAll'
			nameValue='completeAll'
		/>
	)
}

export default FieldChecked
