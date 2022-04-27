import styled from 'styled-components'
import { size } from '../../customStyles'

export const List = styled.ul`
	--radiusSize: ${size?.borderRadius?.itemSmall};

	background-color: ${({ theme }) => theme.colors.bgColor2};
	border-radius: var(--radiusSize) var(--radiusSize) 0 0;
	list-style: none;
	margin-bottom: 0;
	padding: 0;
`
