import { useState, ChangeEvent, FormEvent } from 'react';

export const useForm = <T>(initialSate: T) => {
  const [formData, setFormData] = useState<T>(initialSate);

  const handleOnChance = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const resetForm = () => {
    setFormData(initialSate);
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return {
    ...formData,
    resetForm,
    isValidEmail,
    handleOnChance,
    handleOnSubmit,
  };
};
