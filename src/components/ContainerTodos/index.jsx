import { Route, Switch } from 'wouter'
import { useFilterCt, useTodos } from '../../context/todosContext'
import { ListOfTasks } from '..'

function ContainerTodos() {
	const todos = useTodos()

	return (
		<section>
			<Switch>
				<Route path='/'>
					<ListOfTasks todos={todos} />
				</Route>
				<Route path='/active'>
					<ListOfTasks todos={useFilterCt(false)} />
				</Route>
				<Route path='/completed'>
					<ListOfTasks todos={useFilterCt(true)} />
				</Route>
			</Switch>
		</section>
	)
}

export default ContainerTodos
