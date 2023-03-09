
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { validatorSignUp } from "./validatorSignUp";
import { api } from "../../api";
import "./index.css";

export const Signup = () => {
  const initialValues = {
    email: '',
    group: '9-gr',
    password: '',
  }
  
  const navigate = useNavigate();

  const {
    mutateAsync, isLoading, isError, error,
  } = useMutation({
    mutationFn: (values) => api.signUp(values),
  });

  const submitHandler = async (values) => {
    await mutateAsync(values)
    navigate('/signin')
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validatorSignUp}
      onSubmit={submitHandler}
    >
      <Form className="signup">
        <p className="signup__title">Регистрация</p>
        <div>
          <Field className="signup__input"
          name="email" 
          type="email" 
          placeholder="Электропочта" />
          <ErrorMessage className="signup__error" component="p" name="email" />
        </div>
        <div>
          <Field className="signup__input"
          name="password" 
          type="password" 
          placeholder="Пароль" />
          <ErrorMessage className="signup__error" component="p" name="password" />
        </div>
        <div>
          <Field className="signup__input"
          name="group" 
          type="text" 
          placeholder="9-gr" />
          <ErrorMessage className="signup__error" component="p" name="group" />
        </div>
        <button className="signup__btn" disabled={isLoading} type="submit">Зарегистрироваться</button>
         <div className="signup__link">
            <span>или </span> 
            <Link className="signup__link-to-signin" to="/signin">Войти</Link>
        </div>
        <div></div>
        {isError && (
          <p className="signup__error">
            {error.message}
          </p>
        )}
      </Form>
    </Formik>
  )
}