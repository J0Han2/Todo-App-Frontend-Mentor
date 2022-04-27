import { useEffect, useReducer } from 'react'
import { useLocalSg } from '.'
import generatorId from './generatorId'

export const ACTIONS = {
	ADD_TASK: 'add task',
	TOGGLE_TASK: 'complete task',
	TOGGLE_ALL_TASK: 'complete all task',
	CLEAR_ALL: 'clear all complete task',
	DEL_TASK: 'delete task',
	EDITING: 'edit a task',
	OPEN_EDITOR: 'show input edit task',
}

const newTask = text => ({
	completed: false,
	editing: false,
	id: generatorId(),
	text,
})

const reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.ADD_TASK:
			return [...state, newTask(payload.text)]

		case ACTIONS.DEL_TASK:
			return state.filter(task => task.id !== payload?.id)

		case ACTIONS.CLEAR_ALL:
			return state.filter(task => !task?.completed)

		case ACTIONS.OPEN_EDITOR: {
			const { id, editing } = payload
			return state.map(task => (task.id === id ? { ...task, editing } : task))
		}

		case ACTIONS.EDITING: {
			const { prevTask } = payload
			return state.map(task => (task.id === prevTask?.id ? prevTask : task))
		}

		case ACTIONS.TOGGLE_TASK: {
			return state.map(task =>
				task.id === payload?.id ? { ...task, completed: !task.completed } : task
			)
		}

		case ACTIONS.TOGGLE_ALL_TASK: {
			const { checked } = payload
			return state.map(task => ({ ...task, completed: checked }))
		}

		default:
			return state
	}
}

function useTodos({ initialTodos = [] } = {}) {
	const [storage, setStorage] = useLocalSg({
		key: 'todos',
		initialValue: initialTodos,
	})

	const [todos, dispatch] = useReducer(reducer, storage)

	useEffect(() => {
		setStorage(todos)
	}, [todos, setStorage])

	return [todos, dispatch]
}

export default useTodos
