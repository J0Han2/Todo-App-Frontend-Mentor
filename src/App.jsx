import { Form, ListOfTasks, Footer, FieldCompleteAll } from './components'
import { TodosContextProvider } from './context/todosContext'

function App() {
	return (
		<TodosContextProvider>
			<header>
				<h2>TODO</h2>
				<Form FieldChecked={FieldCompleteAll} />
			</header>
			<main>
				<ListOfTasks />
				<Footer />
			</main>
		</TodosContextProvider>
	)
}

export default App
