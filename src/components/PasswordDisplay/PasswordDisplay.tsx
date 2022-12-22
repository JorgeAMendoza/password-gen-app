import copyIcon from '../../assets/icon-copy.svg';
import styles from './PasswordDisplay.module.css';

interface PasswordDisplayProps {
  password: string;
}

const PasswordDisplay = ({ password }: PasswordDisplayProps) => {
  const copyPassword = () => navigator.clipboard.writeText(password);
  return (
    <section className={styles.passwordDisplay}>
      <h2 data-cy="password" className={styles.passwordText}>
        {password}
      </h2>
      <button
        className=""
        onClick={copyPassword}
        aria-label="Copy generated password to clipboard"
        data-cy="copyPasswordButton"
      >
        <img
          src={copyIcon}
          alt="copy to clipboard icon"
          className={styles.copyImage}
        />
      </button>
    </section>
  );
};

export default PasswordDisplay;
