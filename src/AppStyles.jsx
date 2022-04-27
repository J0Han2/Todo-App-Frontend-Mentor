import styled, { css } from 'styled-components'
import { customCss, Media, size } from './customStyles'

const lateralSpacing = size?.lateralSpacing?.spacingBody

const wrapperStyles = css`
	width: min(${size.width?.minResponsive});
`

export const Header = styled.header`
	align-items: start;
	background: url(${({ theme }) => theme.backgrounds.mobile}) no-repeat center /
		cover;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 1.5rem;
	padding: 2.2rem ${lateralSpacing} 3rem;

	.wrapper {
		width: 100%;
	}

	.container {
		${customCss.flexBox};
		justify-content: space-between;
		margin-bottom: 1.2rem;
	}

	h1 {
		font-size: clamp(1.69rem, 2.4vw, 1.9rem);
		color: hsl(0, 0%, 100%);
		letter-spacing: 1rem;
	}

	${Media.table} {
		background-image: url(${({ theme }) => theme.backgrounds.desktop});
		align-items: center;

		.wrapper {
			width: 38rem;
		}
	}

	${Media.desktop} {
		margin-bottom: 0;
		padding-bottom: 4.3rem;
		padding-top: 3rem;

		.wrapper {
			${wrapperStyles}
		}
	}
`

export const BtnTheme = styled.button`
	${customCss.btnSmallIcon};
	background: url(${({ theme }) => theme?.icons?.btnTheme}) no-repeat center /
		100%;
	transition: background 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const Main = styled.main`
	margin-top: -3.3rem;
	padding-left: ${lateralSpacing};
	padding-right: ${lateralSpacing};

	.wrapper {
		width: 100%;
	}

	${Media.table} {
		margin-top: -4.3rem;
		${customCss.flexBox};
		justify-content: center;

		.wrapper {
			width: 38rem;
		}
	}

	${Media.desktop} {
		margin-top: -3.95rem;

		.wrapper {
			${wrapperStyles};
		}
	}
`
