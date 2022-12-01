import PasswordStrength from '../PasswordStrength/PasswordStrength';
import iconArrowRight from '../../assets/icon-arrow-right.svg';

const PasswordForm = () => {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="passwordLength">
            Character Length <span>current value here</span>
          </label>
          <input
            type="range"
            id="passwordLength"
            name="passwordLength"
            min="8"
            max="20"
          />
        </div>

        {/* make this its own Input Component */}
        <div>
          <div>
            <input
              type="checkbox"
              id="includeUppercase"
              name="includeUppercase"
            />
          </div>
          <label htmlFor="includeUppercase" />
        </div>

        <PasswordStrength />

        <button type="submit">
          Generate{' '}
          <span>
            <img src={iconArrowRight} />
          </span>
        </button>
      </form>
    </section>
  );
};

export default PasswordForm;
