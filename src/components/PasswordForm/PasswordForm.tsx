import * as generator from 'generate-password-browser';
import PasswordStrength from '../PasswordStrength/PasswordStrength';
import iconArrowRight from '../../assets/icon-arrow-right.svg';
import { PasswordFormInputs } from '../../types/form-types';
import { SubmitHandler, useForm } from 'react-hook-form';
import Slider from '../HookForm/Slider/Slider';
import CheckBox from '../HookForm/Checkbox/Checkbox';
import { useEffect, useState } from 'react';
import passwordScore from '../../utils/password-score';
import styles from './PasswordForm.module.css';

interface PasswordFormProps {
  setPassword: React.Dispatch<string>;
}

const PasswordForm = ({ setPassword }: PasswordFormProps) => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { register, handleSubmit, watch } = useForm<PasswordFormInputs>({
    defaultValues: {
      passwordLength: '8',
      useUppercase: true,
      useLowercase: true,
      useNumbers: false,
      useSymbols: false,
    },
  });

  useEffect(() => {
    const password = generator.generate({
      length: 8,
      uppercase: true,
      lowercase: true,
    });
    setPassword(password);
    const score = passwordScore(8, true, true, false, false);
    setPasswordStrength(score);
  }, []);

  const generatePassword: SubmitHandler<PasswordFormInputs> = (data) => {
    const password = generator.generate({
      length: parseInt(data.passwordLength),
      uppercase: data.useUppercase,
      lowercase: data.useLowercase,
      numbers: data.useNumbers,
      symbols: data.useSymbols,
    });
    const score = passwordScore(
      parseInt(data.passwordLength),
      data.useUppercase,
      data.useLowercase,
      data.useNumbers,
      data.useSymbols
    );

    setPassword(password);
    setPasswordStrength(score);
  };
  return (
    <section className={styles.passwordForm}>
      <form onSubmit={handleSubmit(generatePassword)}>
        <Slider
          register={register}
          label="passwordLength"
          sliderCount={watch('passwordLength')}
          data-cy="passwordLengthSlider"
        />

        <div>
          <CheckBox
            register={register}
            label="useUppercase"
            testID="passwordUpperCheckbox"
          />
          <CheckBox
            register={register}
            label="useLowercase"
            testID="passwordLowerCheckbox"
          />
          <CheckBox
            register={register}
            label="useNumbers"
            testID="passwordNumbersCheckbox"
          />
          <CheckBox
            register={register}
            label="useSymbols"
            testID="passwordSymbolsCheckbox"
          />
        </div>

        <PasswordStrength passwordScoreNum={passwordStrength} />

        <button
          type="submit"
          data-cy="generatePasswordButton"
          className={styles.button}
        >
          Generate{' '}
          <span>
            <img src={iconArrowRight} alt="" />
          </span>
        </button>
      </form>
    </section>
  );
};

export default PasswordForm;
