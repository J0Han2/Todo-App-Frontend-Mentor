import { Themes } from './customStyles'
import { useTheme } from './hooks'
import { ThemeProvider } from 'styled-components'
import { TodosContextProvider } from './context/todosContext'
import { BtnTheme, Header, Main } from './AppStyles'
import { Form, Todos, Footer, StylesG } from './components'

function App() {
	const [theme, toggleTheme] = useTheme()

	return (
		<TodosContextProvider>
			<ThemeProvider theme={Themes[theme]}>
				<StylesG />
				<Header>
					<div className='wrapper'>
						<div className='container'>
							<h1>TODO</h1>
							<BtnTheme onClick={() => toggleTheme()} />
						</div>
						<Form />
					</div>
				</Header>
				<Main>
					<div className='wrapper'>
						<Todos />
						<Footer />
					</div>
				</Main>
			</ThemeProvider>
		</TodosContextProvider>
	)
}

export default App
