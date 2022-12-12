import { Path, UseFormRegister } from 'react-hook-form';
import { PasswordFormInputs } from '../../types/form-types';

interface CheckBoxProps {
  label: Path<PasswordFormInputs>;
  register: UseFormRegister<PasswordFormInputs>;
  testID: string;
}

export const CheckBox = ({ label, register, testID }: CheckBoxProps) => {
  return (
    <label>
      <input type="checkbox" {...register(label)} data-cy={testID} />
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
