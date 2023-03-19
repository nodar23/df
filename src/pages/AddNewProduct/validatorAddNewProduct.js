import * as Yup from "yup";

export const validatorAddNewProduct = () => Yup.object({
  name: Yup.string()
    .required('Обязательное поле'),
  pictures: Yup.string(),
  price: Yup.number()
    .required('Обязательное поле'),
  description: Yup.string()
    .required('Обязательное поле'),
  wight: Yup.string(),
  discount: Yup.string(),
  stock: Yup.string(),
  available: Yup.boolean(),
})
