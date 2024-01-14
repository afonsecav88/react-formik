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

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return { ...formData, resetForm, handleOnChance, handleOnSubmit };
};
