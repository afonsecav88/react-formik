import { ChangeEvent, useState } from 'react';
import '../styles/styles.css';

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleOnChance = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setRegisterData({ ...registerData, [name]: value });
    // console.log(e.target.value);
  };

  const { name, email, password1, password2 } = registerData;
  console.log(registerData);

  return (
    <div>
      <h1> Register Page</h1>
      <form>
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
      </form>
    </div>
  );
};
