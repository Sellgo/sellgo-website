import React, {useRef} from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../FormInput';

interface Props {
  label: string;
  placeholder?: string;
  className?: string;
  filterOptions: {value: any, key: any, text: any}[];
  selectedValues: string[];
  handleChange: (value: any) => void;
}

const CheckboxDropdown: React.FC<Props> = props => {
  const {
    label,
    placeholder,
    handleChange,
    className,
    filterOptions,
    selectedValues,
  } = props;
  const ref = useRef(null);

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false);
  /* Close dropdown menu on document click */
  React.useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsDropdownMenuOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);


  const handleCheckboxTick = (e: any, data: any) => {
    console.log(e);
    console.log(data);
    let newSelectedValues = [...selectedValues];

    // if checked state
    if (e.target.checked) {
      // if select all is clicked
      if (data.value === 'Select All') {
        newSelectedValues = filterOptions.map(f => f.value);
      }
      // else normal selected
      else {
        newSelectedValues.push(data.value);
      }
    }

    // if unchecked state
    else if (data.value === 'Select All') {
      newSelectedValues = [];
    } else {
      newSelectedValues = newSelectedValues.filter(f => f !== data.value);
    }

    handleChange(newSelectedValues);
  };

  return (
    <div 
      className={`${styles.checkBoxDropdownInput} ${className}`}
      ref={ref}
    >
      <p>{label}</p>
      <FormInput
        className={`${styles.triggerButton} textInputFilter`}
        type="text"
        placeholder={placeholder}
        value={selectedValues && selectedValues.join(', ')} 
        id={'triggerButton'} 
        name={'triggerButton'}
        onChange={() => null}
        onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
      />
      {isDropdownMenuOpen && (
        <div className={styles.dropdownWrapper}>
          <div className={styles.checkboxListWrapper}>
            <FormInput
              className={styles.checkboxOption}
              key="Select All"
              label="Select All"
              value="Select All"
              onChange={(e) => handleCheckboxTick(e, {value: 'Select All'})}
              type="checkbox"
              checked={selectedValues.length === filterOptions.length} 
              id={'Select All'} 
              name={'Select All'}
            />

            {filterOptions.map(f => {
              return (
                <FormInput
                  type="checkbox"
                  className={styles.checkboxOption}
                  key={f.key}
                  label={f.text}
                  value={f.value}
                  onChange={(e) => handleCheckboxTick(e, f)}
                  checked={selectedValues.includes(f.value)}
                  id={f.value} 
                  name={f.value}
                />
              );
            })}
          </div>
        </div>)}
    </div>
  );
}

export default CheckboxDropdown;
