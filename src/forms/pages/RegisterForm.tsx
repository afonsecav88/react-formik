import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterForm = () => {
  const {
    handleOnChance,
    handleOnSubmit,
    name,
    email,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  return (
    <div>
      <h1> Register Form</h1>
      <form noValidate onSubmit={handleOnSubmit}>
        <input
          value={name}
          name="name"
          type="text"
          placeholder="name"
          onChange={handleOnChance}
        />
        <input
          name="email"
          value={email}
          type="email"
          placeholder="email"
          onChange={handleOnChance}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}
        <input
          name="password1"
          value={password1}
          type="password"
          placeholder="password1"
          onChange={handleOnChance}
        />
        <input
          name="password2"
          value={password2}
          type="password"
          placeholder="repeat password2"
          onChange={handleOnChance}
        />
        <button type="submit">Create</button>
        <button onClick={resetForm} type="submit">
          Reset Form
        </button>
      </form>
    </div>
  );
};
