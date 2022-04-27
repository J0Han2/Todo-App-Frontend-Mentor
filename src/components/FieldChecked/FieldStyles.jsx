import styled from 'styled-components'
import { customCss, Icons, Colors, Media, size } from '../../customStyles'

const gradient = `linear-gradient(${Colors?.primary?.cyanLinearGra}, ${Colors?.primary?.purpleLinearGra})`
const outline = `0.12rem solid`

export const WrapperField = styled.div`
	--sizeWidthAfter: ${size?.width?.smallIcon};
	--sizeHeightAfter: ${size?.high?.smallIcon};
	--sizeMobile: 1.3rem;
	${customCss.inlineFlexBox};

	border-radius: 50%;
	min-height: var(--sizeMobile);
	min-width: var(--sizeMobile);
	position: relative;

	${Media.desktop} {
		min-width: var(--sizeWidthAfter);
		min-height: var(--sizeHeightAfter);

		&::before {
			background: ${({ theme }) => theme.colors?.bgColor2};
			border-radius: inherit;
			content: '';
			left: 50%;
			min-height: calc(1.63rem - 0.12rem);
			min-width: calc(1.63rem - 0.12rem);
			position: absolute;
			pointer-events: none;
			top: 50%;
			transform: translate(-50%, -50%);
			z-index: 1000;
		}
	}
`

export const LabelField = styled.label`
	--o-animationOpacity: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
	--o-animation: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
	--outlineColor: ${({ theme }) => theme.colors?.bgColor3};

	border-radius: inherit;
	min-height: inherit;
	min-width: inherit;
	outline: ${outline} var(--outlineColor);
	position: relative;
	transition: outline var(--o-animation), background var(--o-animation);

	&::before,
	&::after {
		${customCss.psAbsolute};
		border-radius: inherit;
		content: '';
		display: block;
		height: 100%;
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--o-animationOpacity);
		width: 100%;
	}

	&::before {
		background: url(${Icons.check}) no-repeat center / 50%;
		z-index: 2000;
	}
	${Media.desktop} {
		${customCss.btnSmallIcon};
		background: none;
		outline: ${outline} var(--outlineColor);

		&::after {
			background: ${gradient};
		}
	}

	${Media.hover} {
		&:hover {
			outline-color: transparent;

			&::after {
				opacity: 1;
			}
		}
	}
`

export const Complete = styled.input`
	${customCss.overHidden};

	&:checked ~ label {
		background: ${gradient};
		outline-color: transparent;
		z-index: 3000;

		&::before {
			opacity: 1;
		}
	}
`
