import copyIcon from '../../assets/icon-copy.svg';
import style from './PasswordDisplay.module.css';

interface PasswordDisplayProps {
  password: string;
}

const PasswordDisplay = ({ password }: PasswordDisplayProps) => {
  const copyPassword = () => navigator.clipboard.writeText(password);
  return (
    <section className={style.passwordDisplay}>
      <h2 data-cy="password" className={style.passwordText}>
        {password}
      </h2>
      <button
        className=""
        onClick={copyPassword}
        aria-label="Copy generated password to clipboard"
        data-cy="copyPasswordButton"
      >
        <img src={copyIcon} alt="copy to clipboard icon" />
      </button>
    </section>
  );
};

export default PasswordDisplay;
