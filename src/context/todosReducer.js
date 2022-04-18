import generatorId from './generatorId'

export const initialTodos = []

export const ACTIONS = {
	ADD_TASK: 'add task',
	COMPLETE_TASK: 'complete task',
	COMPLETE_ALL: 'complete all task',
	CLEAR_ALL: 'clear all complete task',
	DEL_TASK: 'delete task',
	EDITING: 'edit a task',
	OPEN_EDITOR: 'show input edit task',
}

export function todosReducer(state, { type, payload }) {
	switch (type) {
		case ACTIONS.ADD_TASK: {
			const { text } = payload
			const newTask = {
				completed: false,
				editing: false,
				id: generatorId(),
				text,
			}
			return [...state, newTask]
		}

		case ACTIONS.COMPLETE_TASK: {
			const { checked, id } = payload
			const completed = checked
			return state.map(task => (task.id === id ? { ...task, completed } : task))
		}

		case ACTIONS.COMPLETE_ALL: {
			const completed = payload?.checked
			return state.map(task => ({ ...task, completed }))
		}

		case ACTIONS.DEL_TASK: {
			const { id } = payload
			return state.filter(task => (task.id === id ? null : task))
		}

		case ACTIONS.CLEAR_ALL: {
			return state.filter(task => (task?.completed ? null : task))
		}

		case ACTIONS.OPEN_EDITOR: {
			const { id, editing } = payload
			return state.map(task => (task.id === id ? { ...task, editing } : task))
		}

		case ACTIONS.EDITING: {
			const { prevTask } = payload
			return state.map(task => (task.id === prevTask?.id ? prevTask : task))
		}

		default:
			return state
	}
}
