import styled from 'styled-components'
import { customCss, Icons, Colors } from '../../customStyles'

export const WrapperField = styled.div`
	${customCss.inlineFlexBox};
`

export const LabelField = styled.label`
	--o-animationOpacity: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
	--o-animation: 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
	${customCss.btnSmallIcon};

	border-radius: 50%;
	outline: 0.13rem solid ${({ theme }) => theme.colors?.textColor2};
	overflow: hidden;
	position: relative;
	transition: outline var(--o-animation), background var(--o-animation);

	&::before {
		${customCss.psAbsolute};

		content: '';
		background: url(${Icons.check}) no-repeat center / 50%;
		display: block;
		height: 100%;
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--o-animationOpacity);
		width: 100%;
	}
`

export const Complete = styled.input`
	${customCss.overHidden};

	&:checked ~ label {
		--cyan-Gradient: ${Colors?.primary?.cyanLinearGra};
		--purple-Gradient: ${Colors?.primary?.purpleLinearGra};

		background: linear-gradient(var(--cyan-Gradient), var(--purple-Gradient));
		outline-color: transparent;

		&::before {
			opacity: 1;
		}
	}
`
