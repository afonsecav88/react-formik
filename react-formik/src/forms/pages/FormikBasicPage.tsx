import { useFormik } from 'formik';
import '../styles/styles.css';

export const FormikBasicPage = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    //  async onSubmit(values) {
    //    console.log(values);
    //  },
  });

  const { firstName, lastName, email } = values;

  return (
    <div>
      <h1>Formik Basic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <span>First name i s required </span>

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <span>Last name i s required </span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />

        <span>Email is required </span>
        <span>Check for an valid email format </span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
