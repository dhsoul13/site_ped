/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sign } from '../../../../server/function/sign';
import { removeShow } from '../../../../store/slice/showPopUp';
import Form from '../../../common/Form';

const Auth = ({ setShowAlert }) => {
	const dispatch = useDispatch();
	const showPopApp = () => {
		dispatch(removeShow());
	};
	const regHandler = useCallback(async ({ email, password, setError, show, remove }) => {
		await sign({
			email,
			password,
			setError,
			show,
			remove,
			showPopApp: () => {
				showPopApp();
			}
		});
	}, []);
	const a = 5;
	return (
		<div className='auth__content'>
			<h2 className='auth__title'>Авторизация</h2>
			<Form setShowAlert={setShowAlert} responce={regHandler} />
		</div>
	);
};

export default Auth;
