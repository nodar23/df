import * as Yup from "yup";

export const validatorSignUp = () => Yup.object({
  email: Yup.string()
    .email('Неверный адрес электропочты')
    .required('Обязательное поле'),
  password: Yup.string()
    .max(20, 'Количество символов не более 20')
    .required('Обязательное поле'),
  group: Yup.string()
    .required('Обязательное поле'),
});