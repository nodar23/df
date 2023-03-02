
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { validatorSignInUp } from "../yup/validatorSignInUp";
import { api } from "../api";

const initialValues = {
  email: '',
  group: '9-gr',
  password: '',
}

const Signup = () => {
  const navigate = useNavigate();

  const {
    mutateAsync, isLoading, isError, error,
  } = useMutation({
    mutationFn: (values) => api.signUp(values),
  });

  const SubmitHandler = async (values) => {
    await mutateAsync(values)
    navigate('/signin')
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validatorSignInUp}
      onSubmit={SubmitHandler}
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
         <div className="signup__link-to-signin">
            <span>или</span> 
            <Link to="/signin">Войти</Link>
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


export default Signup;