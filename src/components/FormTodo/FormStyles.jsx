import styled from 'styled-components'
import { customCss, size } from '../../customStyles'

export const FormStyled = styled.form`
	--radiusSize: ${size?.borderRadius?.itemSmall};
	${customCss.flexBox}

	background-color: ${({ theme }) => theme.colors.bgColor2};
	border-radius: var(--radiusSize);
	min-height: 8vh;
	min-width: 100%;
	padding-left: 1.2rem;
	position: relative;
`

export const Field = styled.input`
	background-color: inherit;
	border: none;
	color: hsl(0, 0%, 100%);
	line-height: 0;
	outline: none;
	padding-bottom: 0;
	/* padding-left: 3.55rem; */
	padding-left: 1.55rem;
	padding-right: 1.2rem;
	width: 100%;
`
