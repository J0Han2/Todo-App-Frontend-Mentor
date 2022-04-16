import { FormTask, ListOfTasks } from './components'
import { TodosContextProvider } from './context/todosContext'

function App() {
	return (
		<TodosContextProvider>
			<header>
				<h2>TODO</h2>
				<FormTask />
			</header>
			<main>
				<ListOfTasks />
				{/* <p>Not task</p> */}
			</main>
		</TodosContextProvider>
	)
}

export default App
