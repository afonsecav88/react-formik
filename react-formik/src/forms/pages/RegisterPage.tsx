import '../styles/styles.css';
export const RegisterPage = () => {
  return (
    <div>
      <h1> Register Page</h1>
      <form>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password1" />
        <input type="password" placeholder="repeat password2" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
