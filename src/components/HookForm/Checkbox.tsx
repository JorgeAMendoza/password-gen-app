import { Path, UseFormRegister } from 'react-hook-form';
import { PasswordFormInputs } from '../../types/form-types';

interface CheckBoxProps {
  label: Path<PasswordFormInputs>;
  register: UseFormRegister<PasswordFormInputs>;
}

export const CheckBox = ({ label, register }: CheckBoxProps) => {
  return (
    <label>
      <input type="checkbox" {...register(label)} />
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
