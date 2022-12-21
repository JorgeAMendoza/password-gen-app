import PasswordForm from './components/PasswordForm/PasswordForm';
import PasswordDisplay from './components/PasswordDisplay/PasswordDisplay';
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [password, setPassword] = useState('');
  return (
    <main className={styles.app}>
      <div className={styles.formContainer}>
        <PasswordDisplay password={password} />
        <PasswordForm setPassword={setPassword} />
      </div>
    </main>
  );
}

export default App;
