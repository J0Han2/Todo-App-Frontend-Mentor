import { useDispatch, useFilterCompleted } from '../../context/todosContext'
import { FooterStyles, ListLinks } from './FooterStyles'
import { ACTIONS } from '../../context/todosReducer'
import ActiveLink from '../ActiveLink'

function Footer() {
	const itemsLeft = useFilterCompleted(false).length
	const dispatch = useDispatch()

	const handleDeleteAll = () => dispatch({ type: ACTIONS.CLEAR_ALL })

	return (
		<FooterStyles>
			<span>{itemsLeft} items left</span>
			<ListLinks>
				<li>
					<ActiveLink href='/'>All</ActiveLink>
				</li>
				<li>
					<ActiveLink href='/active'>Actives</ActiveLink>
				</li>
				<li>
					<ActiveLink href='/completed'>Completed</ActiveLink>
				</li>
			</ListLinks>
			<button onClick={handleDeleteAll}>Clear Completed</button>
		</FooterStyles>
	)
}

export default Footer
