import copyIcon from '../../assets/icon-copy.svg';

const PasswordDisplay = () => {
  return (
    <section>
      <h2>generated password here</h2>
      <button aria-label="Copy generated password to clipboard">
        <img src={copyIcon} alt="copy to clipboard icon" />
      </button>
    </section>
  );
};

export default PasswordDisplay;
