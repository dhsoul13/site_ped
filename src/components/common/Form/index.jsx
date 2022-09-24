/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useFormik } from 'formik';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { theme } from '../../../helpers/theme';
import { validateAuth, validateReg } from '../../../helpers/validation/index';
import { addShowAlert, removeShowAlert } from '../../../store/slice/showSpiner';

const Form = ({ reg = false, setShowAlert, responce = () => {} }) => {
	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useDispatch();
	const [countError, setCountError] = useState(0);
	const [error, setError] = useState('');

	const showSpiner = ({ text }) => {
		dispatch(
			addShowAlert({
				text
			})
		);
	};
	const clearSpiner = () => {
		dispatch(removeShowAlert());
	};
	

	const formik = useFormik({
		initialValues: reg
			? {
					email: '',
					name: '',
					password: '',
					type: ''
			  }
			: {
					email: '',
					password: ''
			  },
		validationSchema: reg ? validateReg : validateAuth,
		onSubmit: async (value) => {
			console.log(value);
			if (reg) {
				await responce({
					email: value.email,
					password: value.password,
					name: value.name,
					type: value.type,
					show: showSpiner,
					remove: clearSpiner,
					setError
				});
				formik.setValues({
					email: value.email,
					name: value.name,
					password: value.password,
					type: false
				});
			} else {
				responce({
					email: value.email,
					password: value.password,
					show: showSpiner,
					remove: clearSpiner,
					setError
				});
				if (countError === 0) {
					setShowAlert(0);
				}
				setCountError((prev) => prev + 1);
				if (countError + 1 > 2) {
					setShowAlert(1);
					setCountError(0);
					formik.setValues({
						email: value.email,
						name: '',
						password: ''
					});
				}
			}
		}
	});
	return (
		<form onSubmit={formik.handleSubmit} className='form'>
			<div className='form__error'>{error || ''}</div>
			{reg ? (
				<div className='form__input-container'>
					<input
						className={`form__input ${formik.touched.name && formik.errors.name ? 'err' : ''}`}
						id='name'
						type='text'
						placeholder='ФИО'
						{...formik.getFieldProps('name')}
					/>
					{formik.touched.name && formik.errors.name ? <h2 className='form__input-err'>{formik.errors.name}</h2> : null}
				</div>
			) : (
				''
			)}
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
			<div className='form__input-container'>
				<input
					placeholder='password'
					className={`form__input ${formik.touched.password && formik.errors.password ? 'err' : ''}`}
					id='password'
					type={showPassword ? 'text' : 'password'}
					{...formik.getFieldProps('password')}
				/>
				{formik.touched.password && formik.errors.password ? (
					<h2 className='form__input-err'>{formik.errors.password}</h2>
				) : null}
			</div>
			<div className='form__input-container'>
				{
					/* <input className='form__cheackbox' type='checkbox' /> */
					<ThemeProvider theme={theme}>
						<FormControlLabel
							className='form__label'
							label='Показать пароль'
							control={
								<Checkbox
									onChange={() => {
										setShowPassword((prev) => !prev);
									}}
									disableRipple
								/>
							}
						/>
					</ThemeProvider>
				}
			</div>

			{reg ? (
				<div className='form__input-container'>
					<ThemeProvider theme={theme}>
						<FormControlLabel
							className='form__label'
							label='Нажмите если вы врач'
							control={<Checkbox {...formik.getFieldProps('type')} id='type' disableRipple />}
						/>
					</ThemeProvider>
				</div>
			) : (
				''
			)}
			<button
				type='submit'
				className={`form__button ${
					formik.errors.password || formik.errors.name || formik.errors.email || !formik.dirty ? 'err' : ''
				}`}
			>
				Отправить
			</button>
		</form>
	);
};

export default Form;
