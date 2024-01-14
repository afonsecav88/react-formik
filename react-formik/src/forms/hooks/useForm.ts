import { useState, ChangeEvent, FormEvent } from 'react';

interface InitialStateForm {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export const useForm = (initialSate: InitialStateForm) => {
  const [registerData, setRegisterData] =
    useState<InitialStateForm>(initialSate);

  const handleOnChance = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerData);
  };

  return { registerData, handleOnChance, handleOnSubmit };
};
