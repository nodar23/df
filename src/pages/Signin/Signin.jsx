import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validatorSignIn } from "./validatorSignIn";
import { api } from "../../api/api";
import { setUserToken, setUserName, setUserEmail, setUserGroup, setUserAvatar, setUserAbout } from "../../redux/slices/userInfoSlice";
import "./index.css";

export const Signin = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutateAsync, isLoading, isError, error } = useMutation({mutationFn: (values) => api.signIn(values).then((res) => {
          dispatch(setUserToken(res.token))
          dispatch(setUserName(res.data.name))
          dispatch(setUserEmail(res.data.email))
          dispatch(setUserGroup(res.data.group))
          dispatch(setUserAvatar(res.data.avatar))
          dispatch(setUserAbout(res.data.about))
        }),
    })
  
    const submitHandler = async (values) => {
      await mutateAsync(values)
      setTimeout(() => navigate('/catalog'))
    };
    
    return ( 
    <Formik
    initialValues={initialValues}
    validationSchema={validatorSignIn}
    onSubmit={submitHandler}
  >
    <Form className="signin">
      <div>
      <p className="signin__title">Авторизация</p>
        <Field  className="signin__input"
        name="email" 
        type="email" 
        placeholder="Электропочта" />
        <ErrorMessage className="signin__error" component="p" name="email" />
      </div>
      <div>
        <Field className="signin__input"
        name="password" 
        type="password" 
        placeholder="Пароль" />
        <ErrorMessage className="signin__error" component="p" name="password" />
      </div>
      <button className="signin__btn" disabled={isLoading} type="submit">Войти</button>
      {isError && (
      <p className="signin__error">
        {error.message}
      </p>
      )}
      <div className="signin__link">
        <span>или </span> 
        <Link className="signin__link-to-signup" to="/signup">Зарегистрироваться</Link>
      </div>
    </Form>
  </Formik>
)
}

