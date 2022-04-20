import { Complete, LabelField, WrapperField } from './FieldStyles'

function FieldChecked({ checkedValue, handleOnChange, idValue, nameValue }) {
	return (
		<WrapperField>
			<Complete
				checked={checkedValue}
				id={idValue}
				name={nameValue}
				onChange={handleOnChange}
				type='checkbox'
			/>
			<LabelField htmlFor={idValue} />
		</WrapperField>
	)
}

export default FieldChecked
