import styled from 'styled-components'
import { customCss, Media } from './customStyles'

export const BtnTheme = styled.button`
	${customCss.btnSmallIcon};

	background: url(${({ theme }) => theme?.icons?.btnTheme}) no-repeat center /
		100%;
	transition: background 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const Header = styled.header`
	align-items: start;
	background: url(${({ theme }) => theme.backgrounds.mobile}) no-repeat center /
		cover;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 1.5rem;
	min-height: 40vh;
	padding: 3rem 5.5vw;

	${Media.desktop} {
		background-image: ${({ theme }) => theme.backgrounds.desktop};
	}

	h1 {
		font-size: 27.5px;
		color: hsl(0, 0%, 100%);
		letter-spacing: 1rem;
	}
`

export const Main = styled.main`
	margin-top: -3rem;
	padding-left: 5.5vw;
	padding-right: 5.5vw;
`
