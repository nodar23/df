import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getUserInfoSelector } from "../../redux/slices/userInfoSlice";
import { validatorAddNewProduct } from "./validatorAddNewProduct";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import "./index.css";

export const AddNewProduct = () => {
    const { token } = useSelector(getUserInfoSelector)
    const queryClient = useQueryClient()
  
    const initialValues = {
      pictures: '',
      name: '', 
      price: 0,
      description: '',
      wight: '',
      discount: 0,
      stock: 0,
      available: true,
    }
  
    const { mutateAsync: addNewProduct, isError, error } = useMutation({
      mutationFn: (values) => api.addNewProduct(values, token),
    })
  
    const submitHandler = async (values, {resetForm}) => {
      await addNewProduct(values)
      queryClient.invalidateQueries(['GET_ALL_PRODUCTS'])
      resetForm()
    }
  
    return (
      <>
        <p className="new-product__title">Добавление нового товара в каталог</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validatorAddNewProduct}
          onSubmit={submitHandler}
        >
          <Form className="new-product__form">
            <div>
              <label htmlFor="name">Наименование</label>
              <Field className="new-product__input" name="name" type="text" />
              <ErrorMessage className="new-product__error" component="p" name="name" />
            </div>
            <div>
              <label htmlFor="pictures">Картинка (URL)</label>
              <Field className="new-product__input" name="pictures" type="text" />
              <ErrorMessage className="new-product__error" component="p" name="pictures" />
            </div>
            <div>
              <label htmlFor="price">Цена</label>
              <Field className="new-product__input" name="price" type="number" />
              <ErrorMessage className="new-product__error" component="p" name="price" />
            </div>
            <div>
              <label htmlFor="description">Описание</label>
              <Field className="new-product__input" name="description" type="text" />
              <ErrorMessage className="new-product__error" component="p" name="description" />
            </div>
            <div>
              <label htmlFor="wight">Вес (г)</label>
              <Field className="new-product__input" name="wight" type="text" />
              <ErrorMessage className="new-product__error" component="p" name="wight" />
            </div>
            <div>
              <label htmlFor="discount">Скидка (%)</label>
              <Field className="new-product__input" name="discount" type="number" />
              <ErrorMessage className="new-product__error" component="p" name="discount" />
            </div>
            <div>
              <label htmlFor="stock">Наличие (шт)</label>
              <Field className="new-product__input" name="stock" type="number" />
              <ErrorMessage className="new-product__error" component="p" name="stock" />
            </div>
            <button className="new-product__btn" type="submit">Добавить</button>
            {isError && (
            <p className="new-product__error">
              {error.message}
            </p>
            )}
          </Form>
        </Formik>
        <p className="new-product__link">&#8594;
          <Link className="new-product__link" to="/catalog?filterType=NEW_DATE">посмотреть новые товары в каталоге</Link>  
        </p>
      </>
    )
  }
  