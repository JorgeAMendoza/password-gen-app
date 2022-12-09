import { Path, UseFormRegister } from 'react-hook-form';
import { PasswordFormInputs } from '../../types/form-types';

interface SliderProps {
  label: Path<PasswordFormInputs>;
  register: UseFormRegister<PasswordFormInputs>;
}

const Slider = ({ label, register }: SliderProps) => {
  return (
    <div>
      <div>
        <h2>Character Length</h2>
        <p>slider counter</p>
      </div>

      <label>
        <input
          type="range"
          step={1}
          min={8}
          max={20}
          {...register(label, { required: true, min: 0, max: 20 })}
        />
      </label>
    </div>
  );
};

export default Slider;
