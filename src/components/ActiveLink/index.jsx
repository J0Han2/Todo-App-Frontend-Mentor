import { Link, useRoute } from 'wouter'
import { LinkStyles } from './LinkStyles'

function ActiveLink(props) {
	const [isActive] = useRoute(props?.href)
	const classActive = isActive ? 'active' : null

	return (
		<Link {...props}>
			<LinkStyles className={classActive}>
				{props.children}
			</LinkStyles>
		</Link>
	)
}

export default ActiveLink
