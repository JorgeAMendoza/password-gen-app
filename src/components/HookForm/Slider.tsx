import { Path, UseFormRegister } from 'react-hook-form';
import { PasswordFormInputs } from '../../types/form-types';

interface SliderProps {
  label: Path<PasswordFormInputs>;
  register: UseFormRegister<PasswordFormInputs>;
  sliderCount: string;
}

const Slider = ({ label, register, sliderCount }: SliderProps) => {
  return (
    <div>
      <div>
        <h2>Character Length</h2>
        <p data-cy="passwordLengthText">{sliderCount}</p>
      </div>

      <label>
        <input
          type="range"
          step={1}
          min={8}
          max={20}
          {...register(label, { required: true, min: 0, max: 20 })}
          data-cy="passwordLengthSlider"
        />
      </label>
    </div>
  );
};

export default Slider;
