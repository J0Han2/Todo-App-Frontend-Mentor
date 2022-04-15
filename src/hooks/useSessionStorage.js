import { useState } from 'react'

export function useSessionStorage({ key = '', initialValue = '' }) {
	const [storage, setStorage] = useState(() => {
		try {
			const item = window.sessionStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			return initialValue
		}
	})

	const setValue = value => {
		try {
			setStorage(value)
			window.sessionStorage.setItem(key, JSON.stringify(value))
		} catch (err) {
			console.log(`Fails to add the item to the session storage ${err}`)
		}
	}

	return [storage, setValue]
}
