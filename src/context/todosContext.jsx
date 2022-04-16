import { createContext, useContext, useReducer } from 'react'
import { initialTodos, todosReducer } from './todosReducer'

const StoreTodos = createContext()

export function TodosContextProvider({ children }) {
	const [todos, dispatch] = useReducer(todosReducer, initialTodos)

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
export const useStoreDispatch = () => {
	const [_, dispatch] = useContext(StoreTodos)
	return dispatch
}

export default StoreTodos
