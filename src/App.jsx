import { FormTask, ListOfTasks } from './components'
import FieldChecked from './components/FieldChecked'
import { TodosContextProvider } from './context/todosContext'

function App() {
	return (
		<TodosContextProvider>
			<header>
				<h2>TODO</h2>
				<FormTask FieldChecked={FieldChecked} />
			</header>
			<main>
				<ListOfTasks />
				{/* <p>Not task</p> */}
			</main>
		</TodosContextProvider>
	)
}

export default App
