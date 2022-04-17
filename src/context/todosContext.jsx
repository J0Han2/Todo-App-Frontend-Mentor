import { createContext, useContext, useEffect, useReducer } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialTodos, todosReducer } from './todosReducer'

const StoreTodos = createContext()

export function TodosContextProvider({ children }) {
	const [storageTodos, setStorageTodos] = useLocalStorage({
		key: 'todos',
		initialValue: initialTodos,
	})
	const [todos, dispatch] = useReducer(todosReducer, storageTodos)

	useEffect(() => {
		setStorageTodos(todos)
	}, [todos])

	return (
		<StoreTodos.Provider value={[todos, dispatch]}>
			{children}
		</StoreTodos.Provider>
	)
}

export const useStoreTodos = () => {
	const [todos] = useContext(StoreTodos)
	return todos
}

export const useDispatch = () => {
	const [_, dispatch] = useContext(StoreTodos)
	return dispatch
}

export const useFilterCompleted = boolean => {
	const todos = useStoreTodos()
	return todos.filter(task => (task.completed === boolean ? task : null))
}

export default StoreTodos
