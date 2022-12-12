import copyIcon from '../../assets/icon-copy.svg';

interface PasswordDisplayProps {
  password: string;
}

const PasswordDisplay = ({ password }: PasswordDisplayProps) => {
  const copyPassword = () => navigator.clipboard.writeText(password);
  return (
    <section>
      <h2 data-cy="password">{password}</h2>
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
