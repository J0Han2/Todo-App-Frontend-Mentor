import styled from 'styled-components'
import { customCss } from '../../customStyles'

export const FooterStyles = styled.footer`
	${customCss.flexBox};
	background: ${({ theme }) => theme.colors.bgColor2};
	justify-content: space-between;
	margin-top: -1rem;
	position: relative;

	button {
		background: none;
		border: none;
	}
`
export const ListLinks = styled.ul`
	${customCss.flexBox};
	${customCss.psAbsolute};
	gap: 0.5rem;
	list-style: none;
	padding-left: 0;
`
