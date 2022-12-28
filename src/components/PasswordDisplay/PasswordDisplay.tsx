import Copy from '../Icons/Copy';
import styles from './PasswordDisplay.module.css';

interface PasswordDisplayProps {
  password: string;
}

const PasswordDisplay = ({ password }: PasswordDisplayProps) => {
  const copyPassword = async () =>
    await navigator.clipboard.writeText(password);
  return (
    <section className={styles.passwordDisplay}>
      <h2 data-cy="password" className={styles.passwordText}>
        {password}
      </h2>
      <button
        className={styles.button}
        onClick={copyPassword}
        aria-label="Copy generated password to clipboard"
        data-cy="copyPasswordButton"
      >
        <span>
          <Copy />
        </span>
      </button>
    </section>
  );
};

export default PasswordDisplay;
