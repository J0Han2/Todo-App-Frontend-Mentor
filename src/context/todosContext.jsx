import { createContext, useContext } from 'react'
import { useStorageTodos } from '../hooks'

const StoreTodos = createContext()

export function TodosContextProvider({ children }) {
	const [storageTodos, dispatch] = useStorageTodos({ initialTodos: [] })

	return (
		<StoreTodos.Provider value={[storageTodos, dispatch]}>
			{children}
		</StoreTodos.Provider>
	)
}

export const useTodos = () => {
	const [todos] = useContext(StoreTodos)
	return todos
}

export const useDispatch = () => {
	const dispatch = useContext(StoreTodos)[1]
	return dispatch
}

// useFilterCompletedTodos
export const useFilterCt = boolean => {
	const todos = useTodos()
	return todos.filter(task => (task.completed === boolean ? task : null))
}

export default StoreTodos
