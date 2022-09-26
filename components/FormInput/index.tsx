import React, { memo } from 'react';

interface Props {
	label?: string;
	id: string;
	className?: string;
	hasError?: boolean;
	errorMessage?: string;
	type: 'text' | 'email' | 'password' | 'checkbox' | 'number';
	name: string;
	autoComplete?: 'on' | 'off';
	placeholder?: string;
	value: string;
	required?: boolean;
	onChange: (e: any) => void;
	labelLast?: boolean;
	checked?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}

const FormInput: React.FC<Props> = (props) => {
	const {
		label,
		className,
		hasError,
		errorMessage,
		id,
		labelLast,
		onClick,
		...otherProps
	} = props;

	return (
		<div className={className} onClick={onClick} onKeyDown={onClick}>
			{labelLast ? (
				<>
					<input id={id} {...otherProps} />
					{label && <label htmlFor={id}>{label}</label>}
					{hasError && <small>{errorMessage}</small>}
				</>
			) : (
				<>
					<label htmlFor={id}>{label}</label>
					<input id={id} {...otherProps} />
					{hasError && <small>{errorMessage}</small>}
				</>
			)}
		</div>
	);
};

FormInput.defaultProps = {
	label: '',
	className: '',
	hasError: false,
	errorMessage: '',
	autoComplete: 'off',
	placeholder: '',
	required: false,
	labelLast: false,
	checked: false,
	disabled: false,
	onClick: () => {}
};

export default memo(FormInput);
