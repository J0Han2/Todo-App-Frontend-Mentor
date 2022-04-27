import styled from 'styled-components'
import { customCss, size, Media } from '../../customStyles'

const radiusSize = size?.borderRadius?.itemSmall
const { minContainer } = size?.high
const lateralSpacing = size?.lateralSpacing?.spacingBody

export const FooterStyles = styled.footer`
	${customCss.flexBox};
	background: ${({ theme }) => theme.colors?.bgColor2};
	border-radius: ${radiusSize};
	justify-content: space-between;
	margin-top: 0;
	min-height: ${minContainer};
	padding-left: ${lateralSpacing};
	padding-right: ${lateralSpacing};
	position: relative;

	${Media.desktop} {
		box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
		padding-left: 1.3rem;
		padding-right: 1.3rem;
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
	}

	span,
	button {
		font-size: clamp(0.88rem, 1.1vw, 1.1rem);
		color: ${({ theme }) => theme.colors?.textColor2};
	}

	${Media.hover} {
		button:hover {
			color: ${({ theme }) => theme.colors.textColor};
		}
	}
`
export const ListLinks = styled.ul`
	${customCss.flexBox};
	${customCss.psAbsolute};

	background-color: ${({ theme }) => theme.colors.bgColor2};
	border-radius: ${radiusSize};
	gap: 1.2rem;
	justify-content: center;
	list-style: none;
	min-height: ${minContainer};
	padding-left: 0;
	margin-top: 3.5rem;
	top: 50%;
	width: 100%;

	${Media.desktop} {
		margin: 0;
		position: static;
		width: fit-content;
	}
`
