/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import ExitIcon from '../../../assets/icon/exit-icon';
import { BootstrapButton } from '../../../helpers/theme';

const Alert = ({ text, button = false, textButton, exitAlert, mainFun }) => (
	<div className='alert'>
		<div className='alert__exit' onClick={exitAlert}>
			<ExitIcon />
		</div>
		<div className='alert__content'>
			<h2 className='alert__title'>{text}</h2>
			{button ? (
				<BootstrapButton
					className='alert__button'
					onClick={() => {
						mainFun();
					}}
				>
					{textButton}
				</BootstrapButton>
			) : (
				''
			)}
		</div>
	</div>
);

export default Alert;
