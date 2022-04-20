import { Route, Switch } from 'wouter'
import { useFilterCompleted, useStoreTodos } from '../../context/todosContext'
import { ListOfTasks } from '..'

function ContainerTodos() {
	const todos = useStoreTodos()

	return (
		<section>
			<Switch>
				<Route path='/'>
					<ListOfTasks todos={todos} />
				</Route>
				<Route path='/active'>
					<ListOfTasks todos={useFilterCompleted(false)} />
				</Route>
				<Route path='/completed'>
					<ListOfTasks todos={useFilterCompleted(true)} />
				</Route>
			</Switch>
		</section>
	)
}

export default ContainerTodos
