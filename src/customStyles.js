import { css } from 'styled-components'

export const Media = {
	desktop: `@media screen and (min-width: 768px)`,
	hover: `@media (hover: hover)`,
}

export const Icons = {
	check: '/assets/icons/check.svg',
	cross: '/assets/icons/cross.svg',
	edit: '/assets/icons/edit.svg',
}

export const size = {
	high: {
		smallIcon: '1.63rem',
	},
	width: {
		smallIcon: '1.63rem',
	},
	borderRadius: {
		itemSmall: '.3rem',
	},
}

export const customCss = {
	flexBox: css`
		align-items: center;
		display: flex;
	`,
	inlineFlexBox: css`
		align-items: center;
		display: inline-flex;
	`,
	flexCenter: css`
		align-items: center;
		justify-content: center;
	`,
	minHeight: css`
		min-height: 100vh;
	`,
	overHidden: css`
		height: 0;
		overflow: hidden;
		width: 0;
	`,
	psAbsolute: css`
		left: 0;
		position: absolute;
		top: 0;
	`,
	psAbsoluteCenterY: css`
		top: 50%;
		transform: translateY(-50%);
	`,
	btnSmallIcon: css`
		border: none;
		cursor: pointer;
		min-height: ${size.high.smallIcon};
		min-width: ${size.width.smallIcon};
	`,
}

export const Colors = {
	primary: {
		brightBlue: 'hsl(220, 98%, 61%)',
		cyanLinearGra: 'hsl(192, 100%, 67%)',
		purpleLinearGra: 'hsl(280, 87%, 65%)',
		light: 'hsl(0, 0%, 100%)',
	},
}

export const Themes = {
	default: {
		colors: {
			bgColor: 'hsl(0, 0%, 98%)',
			bgColor2: 'hsl(236, 33%, 92%)',
			textColor: 'hsl(235, 19%, 35%)',
		},
		icons: {
			btnTheme: '/assets/icons/moon.svg',
		},
		backgrounds: {
			desktop: '/assets/images/bg-desk-light.jpg',
			mobile: '/assets/images/bg-mob-light.jpg',
		},
	},
	dark: {
		colors: {
			bgColor: 'hsl(235, 21%, 11%)',
			bgColor2: 'hsl(235, 24%, 19%)',
			textColor: 'hsl(234, 39%, 85%)',
		},
		icons: {
			btnTheme: '/assets/icons/sun.svg',
		},
		backgrounds: {
			desktop: '/assets/images/bg-desk-dark.jpg',
			mobile: '/assets/images/bg-mob-dark.jpg',
		},
	},
}

/* 
## Colors
### Primary
- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)
cyanLinearGra purpleLinearGra
### Neutral
### Light Theme
- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme
- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)

- Text1: hsl(233, 14%, 35%)


- backgroundBody: hsl(235, 21%, 11%)
- background1: hsl(235, 24%, 19%) -> form or input ->listOfTask or Task -> Links
test -> border: hsl(237, 14%, 26%)

 */
