import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { RegistrationFun } from '../../../../server/function/reg';
import { removeShow } from '../../../../store/slice/showPopUp';
import Form from '../../../common/Form';

const Registration = () => {
	const dispatch = useDispatch();
	const showPopApp = () => {
		dispatch(removeShow());
	};
	const regHandler = useCallback(async ({ email, password, name, show, remove, setError, type }) => {
		await RegistrationFun({
			email,
			password,
			name,
			type,
			show,
			remove,
			setError,
			showPopApp: () => {
				showPopApp();
			}
		});
	}, []);
	return (
		<div className='reg__content'>
			<h2 className='reg__title'>Регистрация</h2>
			<Form reg responce={regHandler} />
		</div>
	);
};

export default Registration;
