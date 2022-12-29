import * as generator from 'generate-password-browser';
import PasswordStrength from '../PasswordStrength/PasswordStrength';
import { PasswordFormInputs } from '../../types/form-types';
import { SubmitHandler, useForm } from 'react-hook-form';
import Slider from '../HookForm/Slider/Slider';
import CheckBox from '../HookForm/Checkbox/Checkbox';
import { useEffect, useState } from 'react';
import passwordScore from '../../utils/password-score';
import styles from './PasswordForm.module.css';
import Arrow from '../Icons/Arrow';

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
      strict: true,
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
      <form onSubmit={handleSubmit(generatePassword)} className={styles.form}>
        <Slider
          register={register}
          label="passwordLength"
          sliderCount={watch('passwordLength')}
          data-cy="passwordLengthSlider"
        />

        <div className={styles.checkboxContainer}>
          <CheckBox
            register={register}
            label="useUppercase"
            testID="passwordUpperCheckbox"
            labelText="include uppercase letters"
          />
          <CheckBox
            register={register}
            label="useLowercase"
            testID="passwordLowerCheckbox"
            labelText="include lowercase letters"
          />
          <CheckBox
            register={register}
            label="useNumbers"
            testID="passwordNumbersCheckbox"
            labelText="include numbers"
          />
          <CheckBox
            register={register}
            label="useSymbols"
            testID="passwordSymbolsCheckbox"
            labelText="include symbols"
          />
        </div>

        <PasswordStrength passwordScoreNum={passwordStrength} />

        <button
          type="submit"
          data-cy="generatePasswordButton"
          className={styles.button}
          disabled={
            !(
              watch('useLowercase') ||
              watch('useUppercase') ||
              watch('useNumbers') ||
              watch('useSymbols')
            )
          }
        >
          Generate{' '}
          <span>
            <Arrow />
          </span>
        </button>
      </form>
    </section>
  );
};

export default PasswordForm;
