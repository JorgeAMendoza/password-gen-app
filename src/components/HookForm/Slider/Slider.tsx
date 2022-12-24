import { Path, UseFormRegister } from 'react-hook-form';
import { PasswordFormInputs } from '../../../types/form-types';
import styles from './Slider.module.css';
import { SyntheticEvent } from 'react';

interface SliderProps {
  label: Path<PasswordFormInputs>;
  register: UseFormRegister<PasswordFormInputs>;
  sliderCount: string;
}

const Slider = ({ label, register, sliderCount }: SliderProps) => {
  return (
    <div>
      <div className={styles.sliderTextContainer}>
        <h2 className={styles.sliderTitle}>Character Length</h2>
        <p data-cy="passwordLengthText" className={styles.sliderText}>
          {sliderCount}
        </p>
      </div>

      <label className={styles.sliderLabel}>
        {/* <div className={styles.sliderActiveBar}></div> */}
        <input
          type="range"
          step={1}
          min={8}
          max={20}
          {...register(label, {
            required: true,
            min: 0,
            max: 20,
            onChange: (e: SyntheticEvent) => {
              const rangeElement = e.target as HTMLInputElement;
              const rangeElementValue = parseInt(rangeElement.value);
              if (rangeElementValue === 8) {
                rangeElement.style.setProperty(
                  '--slider-active-width',
                  '0.25%'
                );
              } else if (rangeElementValue === 14) {
                rangeElement.style.setProperty('--slider-active-width', '50%');
              } else if (rangeElementValue === 20)
                rangeElement.style.setProperty(
                  '--slider-active-width',
                  '99.75%'
                );
              else if (rangeElementValue < 14) {
                const activeWidth = (rangeElementValue - 8) * 8.33;
                rangeElement.style.setProperty(
                  '--slider-active-width',
                  `${activeWidth.toFixed(2)}%`
                );
              } else {
                const width = (rangeElementValue - 14) * 8.33 + 50;
                rangeElement.style.setProperty(
                  '--slider-active-width',
                  `${width.toFixed(2)}%`
                );
              }
            },
          })}
          data-cy="passwordLengthSlider"
          className={styles.slider}
        />
      </label>
    </div>
  );
};

export default Slider;
