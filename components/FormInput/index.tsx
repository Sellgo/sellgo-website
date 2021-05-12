import React, { memo } from 'react';

interface Props {
	label: string;
	id: string;
	className?: string;
	hasError?: boolean;
	errorMessage?: string;
	type: 'text' | 'email' | 'password';
	name: string;
	autoComplete?: 'on' | 'off';
	placeholder?: string;
	value: string;
	required?: boolean;
	onChange: (e: any) => void;
}

const FormInput: React.FC<Props> = (props) => {
	const { label, className, hasError, errorMessage, id, ...otherProps } = props;

	return (
		<div className={className}>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...otherProps} />
			{hasError && <small>{errorMessage}</small>}
		</div>
	);
};

export default memo(FormInput);
