import { useSessionStorage } from '../../hooks/useSessionStorage'

function FormTask() {
	const [text, setText] = useSessionStorage({
		key: 'TaskText',
		initialValue: '',
	})

	const handleSubmit = e => {
		e.preventDefault()
	}

	const handleField = e => setText(e.target.value)

	return (
		<form onSubmit={handleSubmit}>
			<input
				autoComplete='off'
				name='fieldTask'
				onChange={handleField}
				placeholder='Create a new todo...'
				value={text}
				type='text'
			/>
		</form>
	)
}
export default FormTask
