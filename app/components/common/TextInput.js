/**
 * Created by Vladimir on 7/30/2016.
 */
import React, {PropTypes} from 'react';

const TextInput = function ({name, label, onChange, placeholder, value, error}) {
	let wrapperClass = 'form-item';
	if (error && error.length) {
		wrapperClass += ' form-item-invalid';
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<input type="text"
			       name={name}
			       placeholder={placeholder}
			       value={value}
			       onChange={onChange} />
			{error && <div className="form-item-error">{error}</div>}
		</div>
	);
};
TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string
};


export default TextInput;