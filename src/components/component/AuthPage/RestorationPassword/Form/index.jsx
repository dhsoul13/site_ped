/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useFormik } from 'formik';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateRes } from '../../../../../helpers/validation';
import { reset } from '../../../../../server/function/reset';
import { addShowAlert, removeShowAlert } from '../../../../../store/slice/showSpiner';

const FormRestoration = ({ handlerClick, restotationStatus }) => {
	const dispatch = useDispatch();
	const showAlert = useSelector((state) => state.ShowSpiner);
	const [error, setError] = useState('');
	const spinerActive = () => {
		dispatch(
			addShowAlert({
				text: 'Ожидайте'
			})
		);
	};

	const spinerRemove = () => {
		dispatch(removeShowAlert());
	};
	const formik = useFormik({
		initialValues: {
			email: ''
		},
		validationSchema: validateRes,
		onSubmit: async (value) => {
			// console.log(handlerClick());
			// handlerClick(value);
			console.log('yes');
			reset({
				email: value.email,
				next: handlerClick,
				spinerActive,
				spinerRemove,
				setError
			});
		}
	});
	return (
		<>
			{restotationStatus === 1 ? (
				<form onSubmit={formik.handleSubmit} className='form'>
					{error ? <div className='form__error'>{error}</div> : ''}
					<div className='form__input-container'>
						<input
							className={`form__input ${formik.touched.email && formik.errors.email ? 'err' : ''}`}
							id='email'
							type='email'
							placeholder='email'
							{...formik.getFieldProps('email')}
						/>
						{formik.touched.email && formik.errors.email ? (
							<h2 className='form__input-err'>{formik.errors.email}</h2>
						) : null}
					</div>
					<button type='submit' className={`form__button ${formik.errors.email || !formik.dirty ? 'err' : ''}`}>
						Отправить
					</button>
				</form>
			) : (
				<div className='form__text'>
					<h2>Сообщение об востановление пароля отправлено на почту</h2>
				</div>
			)}
		</>
	);
};

export default FormRestoration;
