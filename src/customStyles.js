import { css } from 'styled-components'

export const Media = {
	table: `@media screen and (min-width: 768px)`,
	desktop: `@media screen and (min-width: 1024px)`,
	hover: `@media (hover: hover)`,
	orientation: 'screen and (orientation: landscape)',
}

export const Icons = {
	check: '/assets/icons/check.svg',
	cross: '/assets/icons/cross.svg',
	edit: '/assets/icons/edit.svg',
}

export const size = {
	high: {
		smallIcon: '1.63rem',
		minContainer: '4rem',
	},
	width: {
		smallIcon: '1.63rem',
		minResponsive: '34rem, 100%',
	},
	borderRadius: {
		itemSmall: '.3rem',
	},
	font: {
		minSmallText: '.9rem',
	},
	lateralSpacing: {
		spacingBody: '4.5vw',
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
			bgColor: 'hsl(236, 33%, 92%)', // global -> body or main
			bgColor2: 'hsl(0, 0%, 98%)', // general -> div, form section
			bgColor3: 'hsl(236, 33%, 92%)', // border or outline
			textColor: 'hsl(235, 19%, 35%)', // global -> body or main
			textColor2: 'hsl(236, 9%, 61%)', // general -> textTask or hover
			textColor3: 'hsl(233, 11%, 84%)', // footer -> text
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
			bgColor: 'hsl(235, 21%, 11%)', // global -> body or main
			bgColor2: 'hsl(235, 24%, 19%)', // general -> div, form section
			bgColor3: 'hsl(237, 14%, 26%)', // border or outline
			textColor: 'hsl(234, 39%, 85%)', // global -> body or main
			textColor2: 'hsl(234, 11%, 52%)', // general -> textTask or hover
			textColor3: 'hsl(233, 14%, 35%)', // footer -> text
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
