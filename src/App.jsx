import { ThemeProvider } from 'styled-components'
import { BtnTheme, Header, Main } from './AppStyles'
import { Form, Todos, Footer, StylesG } from './components'
import { TodosContextProvider } from './context/todosContext'
import { Themes } from './customStyles'
import { useSessionStorage } from './hooks/useSessionStorage'

function App() {
	const [theme, setTheme] = useSessionStorage({
		key: 'theme',
		initialValue: 'default',
	})

	const changeTheme = () =>
		theme === 'default' ? setTheme('dark') : setTheme('default')

	return (
		<TodosContextProvider>
			<ThemeProvider theme={Themes[theme]}>
				<StylesG />
				<Header>
					<BtnTheme onClick={changeTheme} />
					<h1>TODO</h1>
					<Form />
				</Header>
				<Main>
					<Todos />
					<Footer />
				</Main>
			</ThemeProvider>
		</TodosContextProvider>
	)
}

export default App
