import styled from 'styled-components'
import { Icons, customCss } from '../../customStyles'

export const ListItem = styled.li`
	${customCss.flexBox};
	border-bottom: 0.14rem solid;
	justify-content: space-between;
	position: relative;
	word-break: break-all;

	.container {
		${customCss.flexBox};
		align-items: flex-end;
		flex: 1;
		gap: 1.2rem;

		& span {
			flex: 1;
		}
	}
`

export const WrapperField = styled.div`
	${customCss.psAbsolute}
	opacity: ${({ isShow }) => (isShow ? '1' : '0')};
	transition: opacity 0.3s ease-in;
	z-index: ${({ isShow }) => (isShow ? '100' : '-1')};
`

export const BtnCustom = styled.button`
	background: url(${Icons.cross}) no-repeat center / 100%;
	border: none;
	cursor: pointer;
	min-height: 1.15rem;
	min-width: 1.15rem;
`

export const BtnEdit = styled(BtnCustom)`
	background-image: url(${Icons.edit});
	position: absolute;
	right: 2rem;
	top: 50%;
	transform: translateY(-50%);

	@media screen and (min-width: 1024px),
		screen and (min-width: 1024px) and (orientation: landscape) {
		display: none;
	}
`
/* 	gap: 1rem;
	min-height: 8vh;
	padding-left: 1.2rem;

	background-color: ${({ theme }) => theme.colors.bgColor2};

	padding-right: 2rem; */
