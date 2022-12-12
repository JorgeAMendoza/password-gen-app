interface PasswordStrengthProps {
  passwordScoreNum: number;
}

const PasswordStrength = ({ passwordScoreNum }: PasswordStrengthProps) => {
  return (
    <div>
      <h3>STRENGTH</h3>
      <div>
        <p data-cy="passwordStrengthText">
          {passwordScoreNum === 1 ? 'TOO WEAK!' : null}
          {passwordScoreNum === 2 ? 'WEAK!' : null}
          {passwordScoreNum === 3 ? 'MEDIUM' : null}
          {passwordScoreNum === 4 ? 'STRONG' : null}
        </p>
      </div>
    </div>
  );
};

export default PasswordStrength;
