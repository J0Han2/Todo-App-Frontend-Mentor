const generatorPrefix = () => {
	const characters =
		'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-+=)(*&^%$#@!`~?><:{}[]'
	const charsLength = characters.length
	const maxStringLength = 8
	let prefix = ''

	for (let i = 0; i < maxStringLength; i++) {
		const random = Math.floor(Math.random() * charsLength)
		prefix += characters.substring(random, random + 1)
	}

	return prefix
}

const generatorSequence = () => Math.floor(Math.random() * 5000)

const generatorId = () =>
	`${generatorSequence()}${generatorPrefix()}${generatorSequence()}`

export default generatorId
