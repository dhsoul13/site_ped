/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable react/button-has-type */
/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import React, { useCallback, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { validateAddForm } from '../../../../helpers/validation';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { valueTeg } from '../../../../helpers/valuesTeg';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../../../helpers/theme';
import { useDispatch } from 'react-redux';
import { removeShowAddBlog } from '../../../../store/slice/showAddBlogSlice';
import { uploadFile } from '../../../../server/function/upload';
import showSpiner, {
  addShowAlert,
  removeShowAlert,
} from '../../../../store/slice/showSpiner';
import { addFromBd } from '../../../../server/function/add';

const FormAdd = ({ className, showAlert, exitPopUp }) => {
  const dispatch = useDispatch();
  const initialValues = {
    text: '',
    textPicture: '',
    teg: '',
    title: '',
    photoUrl: '',
  };
  const [tegCustome, setTegCustome] = useState(false);
  const [imageUpload, setImgUpload] = useState(null);

  //// включить спинер

  const showSpinerCustome = ({ boolean }) => {
    if (boolean) {
      dispatch(addShowAlert({ text: 'Подождите идет загрузка...' }));
    } else {
      dispatch(removeShowAlert(''));
    }
  };

  const handleClickUploadFile = async (formik) => {
    if (imageUpload == null) {
      showAlert();
      return null;
    }
    const result = await uploadFile({
      info: imageUpload,
      showAlert: showSpinerCustome,
    });

    return result?.metadata?.fullPath;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validateAddForm,
    onSubmit: (values) => {
      const one = async (value) => {
        const a = await handleClickUploadFile(formik);

        await addFromBd({
          src: 'blog',
          showSpiner: showSpinerCustome,
          value: { ...value, photoUrl: a.split('/')[1] },
          exitPopUp,
        });
      };

      one(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={`${className}__form form `}>
      <div className={`${className}__input-container form__input-container `}>
        <label htmlFor='text' className={`${className}__label form__label `}>
          <span>Текст</span>
        </label>
        <textarea
          id='text'
          name='text'
          onChange={formik.handleChange}
          value={formik.values.text}
          className={`${className}__textarea form__input ${
            formik.touched.text && formik.errors.text ? 'err' : ''
          }`}
        />
        {formik.touched.text && formik.errors.text ? (
          <h2 className='form__input-err'>{formik.errors.text}</h2>
        ) : null}
      </div>

      <div className={`${className}__input-container form__input-container `}>
        <label htmlFor='title' className={`${className}__label form__label `}>
          <span>Заголовок</span>
        </label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.title}
          className='form__input'
        />
        {formik.touched.title && formik.errors.title ? (
          <h2 className='form__input-err'>{formik.errors.title}</h2>
        ) : null}
      </div>

      <div className={`${className}__input-container form__input-container `}>
        <label
          htmlFor='textPicture'
          className={`${className}__label form__label `}
        >
          <span>Текст на изображение</span>
        </label>
        <input
          id='textPicture'
          name='textPicture'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.textPicture}
          className='form__input'
        />

        {formik.touched.textPicture && formik.errors.textPicture ? (
          <h2 className='form__input-err'>{formik.errors.textPicture}</h2>
        ) : null}
      </div>

      {!tegCustome ? (
        <div className={`${className}__input-container form__input-container `}>
          <label htmlFor='teg' className={`${className}__label form__label `}>
            <span>Тэг</span>
          </label>
          <Autocomplete
            disablePortal
            id='teg'
            name='teg'
            options={valueTeg}
            sx={{
              padding: 0,
              border: '1px solid #ede9e8',
              input: {
                fontWeight: 400,
                fontSize: '1.25rem',
                lineHeight: -10,
                fontFamily: 'Futura New',
              },
              fieldset: {
                border: `0px solid red`,
              },

              '&.Mui-focused': {
                fieldset: {
                  border: `0`,
                },
              },
            }}
            onChange={(e, value) => {
              formik.setFieldValue('teg', value.label);
            }}
            className='form__input'
            renderInput={(params) => (
              <TextField
                sx={{
                  fontWeight: 400,
                  fontSize: '1.25rem',
                  lineHeight: -10,
                  fontFamily: 'Futura New',
                }}
                value={formik.values.teg}
                {...params}
              />
            )}
          />
          {formik.touched.teg && formik.errors.teg ? (
            <h2 className='form__input-err'>{formik.errors.teg}</h2>
          ) : null}
        </div>
      ) : (
        <div className={`${className}__input-container form__input-container `}>
          <label htmlFor='teg' className={`${className}__label form__label `}>
            <span>Тэг</span>
          </label>
          <input
            id='teg'
            name='teg'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.teg}
            className='form__input'
          />
          {formik.touched.teg && formik.errors.teg ? (
            <h2 className='form__input-err'>{formik.errors.teg}</h2>
          ) : null}
        </div>
      )}

      <div className={`${className}__input-container form__input-container `}>
        <FormGroup
          onChange={() => {
            formik.setFieldValue('teg', '');
            setTegCustome(!tegCustome);
          }}
        >
          <FormControlLabel
            control={
              <ThemeProvider theme={theme}>
                <Checkbox />
              </ThemeProvider>
            }
            label='Создать свой тег'
            sx={{
              span: {
                fontWeight: 400,
                fontSize: '1.25rem',
                lineHeight: -10,
                fontFamily: 'Futura New',
              },
            }}
          />
        </FormGroup>
      </div>

      <div className={`${className}__input-container form__input-container `}>
        <input
          type='file'
          accept='.jpg,.jpeg,.png'
          onChange={async (event) => {
            await setImgUpload(event.target.files[0]);
          }}
        />
        {/* <button
          // onClick={() => {
          //   handleClickUploadFile();
          // }}
          type='button'
        >
          Загрузить файл
        </button> */}
      </div>

      <button type='submit' className={`${className}__button form__button`}>
        Отправить
      </button>
    </form>
  );
};

export default FormAdd;
