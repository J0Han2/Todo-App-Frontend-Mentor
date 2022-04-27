import styled from 'styled-components'
import { Colors, Media } from '../../customStyles'

export const LinkStyles = styled.a`
	color: ${({ theme }) => theme.colors?.textColor2};
	font-size: clamp(0.88rem, 1.1vw, 1rem);
	font-weight: bold;
	text-decoration: none;

	&.active {
		color: ${Colors?.primary?.brightBlue};
	}

	${Media.hover} {
		&:hover {
			color: ${({ theme }) => theme.colors.textColor};
		}
	}
`
