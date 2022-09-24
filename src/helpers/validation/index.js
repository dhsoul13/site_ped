/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const validateAuth = Yup.object().shape({
  email: Yup.string()
    .email('Некорректный email')
    .required('Объязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен быть минимум 6 символов')
    .required('Объязательное поле'),
});

export const validateReg = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Cлишком короткое ФИО')
    .max(30, 'Cлишком длинное ФИО')
    .required('Объязательное поле'),
  email: Yup.string()
    .email('Некорректный email')
    .required('Объязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен быть минимум 6 символов')
    .required('Объязательное поле'),
});

export const validateRes = Yup.object().shape({
  email: Yup.string()
    .email('Некорректный email')
    .required('Объязательное поле'),
});

export const validateAddForm = Yup.object().shape({
  text: Yup.string()
    .min(20, 'Текст должен содеражать хотя бы 20 символов')
    .max(300, 'Слишком много')
    .required('Объязательное поле'),
  textPicture: Yup.string()
    .min(3, 'Текст должен содеражать хотя бы 5 символов')
    .max(20, 'Слишком много')
    .required('Объязательное поле'),
  teg: Yup.string('Объязательное поле')
    .min(3, 'Текст должен содеражать хотя бы 5 символов')
    .max(20, 'Слишком много')
    .required('Объязательное поле'),
  title: Yup.string()
    .min(3, 'Текст должен содеражать хотя бы 5 символов')
    .max(20, 'Слишком много')
    .required('Объязательное поле'),
});
