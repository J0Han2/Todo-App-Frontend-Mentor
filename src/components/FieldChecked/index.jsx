function FieldChecked({ checkedValue, handleOnChange, idValue, nameValue }) {
	return (
		<div>
			<input
				checked={checkedValue}
				id={idValue}
				name={nameValue}
				onChange={handleOnChange}
				type='checkbox'
			/>
			<label htmlFor={idValue}></label>
		</div>
	)
}

export default FieldChecked
