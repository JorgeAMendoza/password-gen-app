import PasswordForm from './components/PasswordForm/PasswordForm';
import PasswordDisplay from './components/PasswordDisplay/PasswordDisplay';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  return (
    <main>
      <PasswordDisplay password={password} />
      <PasswordForm setPassword={setPassword} />
    </main>
  );
}

export default App;
