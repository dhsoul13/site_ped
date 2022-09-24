/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable spaced-comment */
/* eslint-disable react/self-closing-comp */
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExitIcon from '../../../../assets/icon/exit-icon';
import { removeShowAddBlog } from '../../../../store/slice/showAddBlogSlice';
import Alert from '../../../common/alert';
import FormAdd from '../../Forms/formAdd';

const AddPopUp = ({ className, title }) => {
  const [showAlert, setShowAlert] = useState(false);
  const dispath = useDispatch();
  //// закрытие модального окна
  const handlerClickClose = useCallback(() => {
    dispath(removeShowAddBlog());
  }, []);

  /// закрыть Алерт
  const handleClickAlert = () => {
    setShowAlert(!showAlert);
  };

  const changeClickAlert = () => {
    setShowAlert(true);
  };

  return (
    <div className={`${className}`}>
      <div className={`${className}__container`}>
        {showAlert ? (
          <Alert text='Прекрепите фотографию' exitAlert={handleClickAlert} />
        ) : (
          ''
        )}
        <div className={`${className}__content`}>
          <div
            className={`${className}__exit`}
            onClick={() => {
              handlerClickClose();
            }}
          >
            <ExitIcon />
          </div>
          <h2 className={`${className}__title`}>{title}</h2>
          <ul className={`${className}__list`}>
            <FormAdd className={className} showAlert={changeClickAlert} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddPopUp;
