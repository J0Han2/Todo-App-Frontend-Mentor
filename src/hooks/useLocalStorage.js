import { useState } from 'react'

function useLocalStorage({ key = '', initialValue = '' } = {}) {
	const [storageValue, setStorageValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			return initialValue
		}
	})

	const setValue = text => {
		try {
			window.localStorage.setItem(key, JSON.stringify(text))
			setStorageValue(text)
		} catch (err) {
			console.log(`Fails to add the item to the local storage ${err}`)
		}
	}

	return [storageValue, setValue]
}

export default useLocalStorage
