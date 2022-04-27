import styled from 'styled-components'
import {customCss, Colors, size } from '../../customStyles'

export const WrapperField = styled.div`
	--radiusSize: ${size?.borderRadius?.itemSmall};

	${customCss.psAbsolute}

	border-radius: var(--radiusSize);
	height: 100%;
	overflow: hidden;
	opacity: ${({ isShow }) => (isShow ? '1' : '0')};
	transition: opacity 0.3s ease-in;
	z-index: ${({ isShow }) => (isShow ? '5000' : '-1')};
	width: 100%;
`

export const FieldEditText = styled.input`
	--smallFz: ${size?.font?.minSmallText};

	background-color: ${({ theme }) => theme.colors.bgColor};
	border: none;
	color: inherit;
	caret-color: ${Colors?.primary?.brightBlue};
	font-size: var(--smallFz);
	outline: none;
	padding-left: 1.2rem;
	padding-right: 1.2rem;
	height: inherit;
	width: inherit;
`
