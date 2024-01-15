import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

export const FormikBasic = () => {
  interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
  }

  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = 'First name is required';
    } else if (firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!lastName) {
      errors.lastName = 'Last name is required';
    } else if (lastName.length >= 10) {
      errors.lastName = 'Must be 10 characters or less';
    }

    if (!email) {
      {
        errors.email = 'Required';
      }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      {
        errors.email = 'Invalid email address';
      }
    }
    console.log(errors);
    return errors;
  };

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
      //  async onSubmit(values) {
      //    console.log(values);
      //  },
    });

  const { firstName, lastName, email } = values;

  return (
    <div>
      <h1>Formik Basic</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
