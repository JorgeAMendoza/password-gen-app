import { Path, UseFormRegister } from 'react-hook-form';
import { PasswordFormInputs } from '../../../types/form-types';
import styles from './Checkbox.module.css';

interface CheckBoxProps {
  label: Path<PasswordFormInputs>;
  register: UseFormRegister<PasswordFormInputs>;
  testID: string;
  labelText: string;
}

export const CheckBox = ({
  label,
  register,
  testID,
  labelText,
}: CheckBoxProps) => {
  return (
    <label className={styles.checkboxContainer} data-cy={testID}>
      {' '}
      {labelText}
      <input type="checkbox" {...register(label)} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
