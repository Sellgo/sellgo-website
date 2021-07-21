import React, { memo, useState } from 'react';

/* Components */
import FormInput from '../FormInput';

/* Styling */
import styles from './index.module.scss';

interface Props {
	id: string;
	name: string;
	label?: string;
	acknowledge?: boolean;
	options: string[];
	className?: string;
	optionClassName?: string;
	hasError?: boolean;
	required?: boolean;
	errorMessage?: string;
	onChange: (e: any) => void;
}

/* Upon change, returns an event.target with 
 {name: a results array of selected options} */

const MultiSelectCheckBoxInput: React.FC<Props> = (props) => {
	// Initialise result to be an empty array.
	const [result, setResult] = useState<string[]>([]);

	const { id, name, options, onChange, label, ...otherProps } = props;

	/* Handler for event changes */
	const handleChange = (e: any) => {
		const { checked, value } = e.target;
		let newResult: any = result;

		// Add value to results array if checkbox is checked.
		if (checked) {
			newResult.push(value);
		} else {
			newResult = result.filter((option) => option !== value);
		}

		setResult(newResult);
		let event;
		if (otherProps.acknowledge) {
			event = {
				target: {
					name,
					value: newResult.length === 1 ? 'true' : 'false'
				}
			};
		} else {
			event = {
				target: {
					name,
					value: newResult.join(';')
				}
			};
		}

		onChange(event);
	};

	return (
		<div
			className={`${styles.multiSelectBox} ${otherProps.className} `}
			id={id}
		>
			{label && <label>{label}</label>}
			{options &&
				options.map((option: any) => {
					return (
						<FormInput
							key={name + option}
							className={`${styles.checkBoxInput} ${otherProps.optionClassName}`}
							label={option}
							id={name + option}
							type="checkbox"
							name={option}
							value={option}
							onChange={handleChange}
							hasError={false}
							errorMessage=""
							labelLast
							required={otherProps.required}
						/>
					);
				})}
		</div>
	);
};

export default memo(MultiSelectCheckBoxInput);
