import styles from './PasswordStrength.module.css';

interface PasswordStrengthProps {
  passwordScoreNum: number;
}

const PasswordStrength = ({ passwordScoreNum }: PasswordStrengthProps) => {
  return (
    <div className={styles.passwordStrength}>
      <h4>STRENGTH</h4>
      <div className={styles.meterContainer}>
        <p
          data-cy="passwordStrengthText"
          className={styles.passwordStrengthText}
        >
          {passwordScoreNum === 1 ? 'TOO WEAK!' : null}
          {passwordScoreNum === 2 ? 'WEAK!' : null}
          {passwordScoreNum === 3 ? 'MEDIUM' : null}
          {passwordScoreNum === 4 ? 'STRONG' : null}
        </p>
        <div
          className={styles.passwordStrengthMeter}
          data-strength={passwordScoreNum}
        >
          <div
            className={styles.meterBarOne}
            data-cy="passwordMeterBarOne"
          ></div>
          <div
            className={styles.meterBarTwo}
            data-cy="passwordMeterBarTwo"
          ></div>
          <div
            className={styles.meterBarThree}
            data-cy="passwordMeterBarThree"
          ></div>
          <div
            className={styles.meterBarFour}
            data-cy="passwordMeterBarFour"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;
