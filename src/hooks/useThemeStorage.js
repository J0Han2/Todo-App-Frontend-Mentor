import { useSessionSg } from '.'

const themes = {
	DARK: 'dark',
	DEFAULT: 'default',
}

function useThemeStorage() {
	const themePrefersUser =
		window.matchMedia &&
		window.matchMedia(`(prefers-color-scheme: ${themes.DARK})`).matches
			? themes.DARK
			: themes.DEFAULT

	const initialValue = themePrefersUser || themes.DEFAULT

	const [storageTheme, setStorageTheme] = useSessionSg({
		key: 'theme',
		initialValue,
	})

	const changeTheme = () =>
		storageTheme === themes.DEFAULT
			? setStorageTheme(themes.DARK)
			: setStorageTheme(themes.DEFAULT)

	return [storageTheme, changeTheme]
}

export default useThemeStorage
