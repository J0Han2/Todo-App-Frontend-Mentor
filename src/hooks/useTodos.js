import { useEffect, useReducer } from 'react'
import { useLocalStorage } from './useLocalStorage'
import generatorId from '../context/generatorId'

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

const isPropExist = (prop, payload) => {
	const propToString = prop.toString().toLocaleLowerCase()
	if (!(propToString in payload)) return true
	return false
}

const reducer = (state, { type, payload }) => {
	const { todos, history } = state
	const newHistory = [...history, todos]

	switch (type) {
		case ACTIONS.ADD_TASK: {
			const { text } = payload
			if (isPropExist({ prop: text, payload })) return state
			return { todos: [...todos, newTask(text)], history: newHistory }
		}

		case ACTIONS.TOGGLE_TASK: {
			const { checked, id } = payload
			if (!('checked' in payload) || !('id' in payload)) return state
			const completed = checked
			const completedTask = todos.map(task =>
				task.id === id ? { ...task, completed } : task
			)
			return { todos: completedTask, history: newHistory }
		}

		case ACTIONS.TOGGLE_ALL_TASK: {
			const completed = payload?.checked
			if (!('checked' in payload)) return state
			const completedAllTask = todos.map(task => ({ ...task, completed }))
			return { todos: completedAllTask, history: newHistory }
		}

		case ACTIONS.DEL_TASK: {
			const { id } = payload
			if (!('id' in payload)) return state
			const deleteTask = todos.filter(task => task.id !== id)
			return { todos: deleteTask, history: newHistory }
			// return state.filter(task => (task.id === id ? null : task))
		}

		case ACTIONS.CLEAR_ALL: {
			const clearAll = todos.filter(task => task?.completed)
			return { todos: clearAll, history: newHistory }
			// return state.filter(task => (task?.completed ? null : task))
		}

		case ACTIONS.OPEN_EDITOR: {
			const { id, editing } = payload
			if (!('id' in payload) || !('editing' in payload)) return state
			const editingTask = todos.map(task =>
				task.id === id ? { ...task, editing } : task
			)
			return { todos: editingTask, history: newHistory }
		}

		case ACTIONS.EDITING: {
			const { prevTask } = payload
			if (!('prevTask' in payload)) return state
			const taskEditing = todos.map(task =>
				task.id === prevTask?.id ? prevTask : task
			)
			return { todos: taskEditing, history: newHistory }
		}

		default:
			return state
	}
}

export function useTodos({ initialTodos = [] } = {}) {
	const [storage, setStorage] = useLocalStorage({ key: 'todos', initialTodos })
	const [state, dispatch] = useReducer(reducer, {
		todos: initialTodos,
		history: [],
	})

	const { todos } = state

	useEffect(() => {
		setStorage(todos)
	}, [todos, setStorage])

	return [storage, dispatch]
}
