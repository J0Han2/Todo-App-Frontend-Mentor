import styled from 'styled-components'
import { customCss, size, Colors, Media } from '../../customStyles'

export const FormStyled = styled.form`
	--radiusSize: ${size?.borderRadius?.itemSmall};
	--minContainer: ${size?.high?.minContainer};
	${customCss.flexBox};

	background-color: ${({ theme }) => theme.colors.bgColor2};
	border-radius: var(--radiusSize);
	min-height: var(--minContainer);
	min-width: 100%;
	padding-left: 1.2rem;
	position: relative;
`

export const Field = styled.input`
	--smallFz: ${size?.font?.minSmallText};

	background-color: inherit;
	border: none;
	color: inherit;
	caret-color: ${Colors?.primary?.brightBlue};
	outline: none;
	font-size: var(--smallFz);
	min-height: inherit;
	padding-left: 0.8rem;
	padding-right: 1.2rem;
	width: 100%;
	${Media.desktop} {
		padding-left: 1rem;
	}
`
