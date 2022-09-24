/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import ExitIcon from '../../../../assets/icon/exit-icon';
import SignUp from '../../../../assets/icon/sign-up';
import UserIcon from '../../../../assets/icon/user-icon';
import { removeShow } from '../../../../store/slice/showPopUp';
import Auth from '../../AuthPage/Auth';
import Registration from '../../AuthPage/Registration';
import RestotationPassword from '../../AuthPage/RestorationPassword';
import Alert from '../../../common/alert';

const AuthPopUp = () => {
  const [type, setType] = useState(true);
  const [showAlert, setShowAlert] = useState(0);
  const [restoration, setRestoration] = useState(false);
  const [restotationStatus, setRestotationStatus] = useState(1);
  const dispatch = useDispatch();
  const hiddenClickHandler = () => {
    dispatch(removeShow());
  };

  const exitAlertHandler = useCallback(() => {
    setShowAlert(0);
  }, []);

  const showAlertHelpsUser = useCallback((value) => {
    setShowAlert(value);
  }, []);

  const restorationPassword = useCallback(() => {
    setShowAlert(0);
    setRestoration(!restoration);
  }, []);

  return (
    <div className='AuthPopUp'>
      {showAlert ? (
        <Alert
          text='Забыли пароль?'
          textButton='Востановить пароль'
          exitAlert={exitAlertHandler}
          button
          mainFun={restorationPassword}
        />
      ) : (
        ''
      )}
      <div className='AuthPopUp__content'>
        <div className='AuthPopUp__form'>
          <div
            className='AuthPopUp__exit'
            onClick={() => {
              hiddenClickHandler();
            }}
          >
            <div>
              <ExitIcon />
            </div>
          </div>
          {!restoration ? (
            <>
              <div className='AuthPopUp__buttons'>
                <button
                  className='AuthPopUp__button'
                  onClick={() => {
                    setType(true);
                  }}
                >
                  <UserIcon />
                </button>
                <button
                  className='AuthPopUp__button'
                  onClick={() => {
                    setType(false);
                  }}
                >
                  <SignUp />
                </button>
              </div>
              {type ? (
                <Auth setShowAlert={showAlertHelpsUser} />
              ) : (
                <Registration />
              )}
            </>
          ) : (
            <>
              <div className='AuthPopUp__restotation-buttons'>
                <button
                  disabled={restotationStatus !== 1}
                  className={`AuthPopUp__restotation-button ${
                    restotationStatus !== 1 ? 'disible' : ''
                  }`}
                  onClick={() => {}}
                >
                  1
                </button>
                <button
                  disabled={restotationStatus !== 2}
                  className={`AuthPopUp__restotation-button ${
                    restotationStatus !== 2 ? 'disible' : ''
                  }`}
                  onClick={() => {}}
                >
                  2
                </button>
              </div>
              <RestotationPassword
                setRestotationStatus={setRestotationStatus}
                restotationStatus={restotationStatus}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPopUp;
