import { useDispatch, useFilterCompleted } from '../../context/todosContext'
import { ACTIONS } from '../../context/todosReducer'

function Footer() {
	const itemsLeft = useFilterCompleted(false).length
	const dispatch = useDispatch()

	const handleDeleteAll = () => dispatch({ type: ACTIONS.CLEAR_ALL })

	return (
		<footer>
			<span>{itemsLeft} items left</span>
			<ul>
				<li>All</li>
				<li>actives</li>
				<li>Completed</li>
			</ul>
			<button onClick={handleDeleteAll}>Clear Completed</button>
		</footer>
	)
}

export default Footer
