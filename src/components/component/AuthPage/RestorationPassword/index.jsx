/* eslint-disable react/prop-types */
import React from 'react';
import FormRestoration from './Form';

const RestotationPassword = ({ setRestotationStatus, restotationStatus }) => {
	const a = 5;
	const handlerClick = () => {
		if (restotationStatus === 1) {
			setRestotationStatus(2);
		} else {
			setRestotationStatus(1);
		}
	};

	return (
		<div className='res__content'>
			<h2 className='res__title'>Востановление пароля</h2>
			<FormRestoration handlerClick={handlerClick} restotationStatus={restotationStatus} />
		</div>
	);
};

export default RestotationPassword;
