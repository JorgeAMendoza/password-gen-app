import copyIcon from '../../assets/icon-copy.svg';
import './PasswordDisplay.css';

interface PasswordDisplayProps {
  password: string;
}

const PasswordDisplay = ({ password }: PasswordDisplayProps) => {
  const copyPassword = () => navigator.clipboard.writeText(password);
  return (
    <section className="password-display">
      <h2 data-cy="password" className="password-display__text">
        {password}
      </h2>
      <button
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
