import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SinOut from '../../../assets/icon/sinOut';
import { exit } from '../../../server/function/exit';
import { RemoveAuth } from '../../../store/slice/auth';

const AuthMenu = () => {
	const { name } = useSelector((state) => state.Auth);
	const dispatch = useDispatch();

	const exitHandler = () => {
		dispatch(RemoveAuth());
	};

	const spinerActive = (type, text) => {
		dispatch();
	};

	return (
		<div className='auth-menu'>
			<div className='auth-menu__content'>Пользователь: {name || 'Перезагрузите страницу'}</div>
			<div className='auth-menu__exit'>
				<button
					type='button'
					onClick={() => {
						exit({
							exitHandler
						});
					}}
				>
					<SinOut />
				</button>
			</div>
		</div>
	);
};

export default AuthMenu;
