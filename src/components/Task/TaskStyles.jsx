import styled, { css } from 'styled-components'
import { Icons, customCss, size, Media } from '../../customStyles'

const MediaOrientationAndDesk = `${Media.desktop}, ${Media.desktop} and ${Media.orientation}`

const Btn = css`
	background: no-repeat center / 100%;
	border: none;
	cursor: pointer;
	min-height: 1rem;
	min-width: 1rem;
`

export const ListItem = styled.li`
	--minContainer: ${size?.high?.minContainer};
	${customCss.flexBox};

	border-bottom: 0.12rem solid ${({ theme }) => theme.colors?.bgColor3};
	justify-content: space-between;
	min-height: var(--minContainer);
	position: relative;
	padding-left: 1.2rem;
	padding-right: 1.2rem;
	word-break: break-all;

	.container {
		${customCss.flexBox};
		flex: 1;
		gap: 0.8rem;
		${Media.desktop} {
			gap: 0.95rem;
		}
	}

	.edit {
		${Btn};

		background-image: url(${Icons.edit});
		position: absolute;
		right: 0.3rem;
		top: 25%;
		transform: translateY(-50%);

		@media ${Media.orientation}, ${Media.table} {
			right: 2.3rem;
			top: 50%;
		}

		${Media.table} {
			top: 50%;
			right: 2.3rem;
		}

		${MediaOrientationAndDesk} {
			display: none;
		}
	}

	${Media.hover} {
		&:hover {
			.delete {
				opacity: 1;
				transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
			}
		}
	}
`

export const ItemText = styled.span`
	--smallFz: ${size?.font?.minSmallText};

	cursor: pointer;
	flex: 0.9;
	font-size: clamp(var(--smallFz), 1.2vw, 1.1rem);
	place-self: end;
	text-align: left;
	word-break: break-word;
	word-spacing: -0.1rem;

	&.completed {
		--completedColor: ${({ theme }) => theme.colors?.textColor3};

		color: var(--completedColor);
		font-style: oblique;
		text-decoration: line-through;
		text-decoration-color: var(--completedColor);
		text-decoration-thickness: from-font;
	}
`

export const WrapperField = styled.div`
	${customCss.psAbsolute}

	border-radius: inherit;
	height: 100%;
	overflow: hidden;
	opacity: ${({ isShow }) => (isShow ? '1' : '0')};
	transition: opacity 0.3s ease-in;
	z-index: ${({ isShow }) => (isShow ? '5000' : '-1')};
	width: 100%;
`

export const BtnCustom = styled.button`
	${Btn};

	background-image: url(${Icons.cross});
	transform: translateX(-0.65rem);

	@media ${Media.orientation} {
		transform: translateX(-3.65rem);
	}

	${Media.table} {
		transform: translateX(-3.65rem);
	}

	${Media.desktop} {
		opacity: 0;
		transform: translateX(-0.73rem);
	}
`
