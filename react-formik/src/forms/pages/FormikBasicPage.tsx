import '../styles/styles.css';

export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic tutorial</h1>
      <form noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" placeholder="First Name" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" placeholder="Last Name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
