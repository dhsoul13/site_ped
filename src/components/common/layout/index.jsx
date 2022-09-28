/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BootstrapButton } from '../../../helpers/theme';

const LayoutPage = ({
  children,
  className,
  title,
  isAdmin,
  textButton,
  onClickButton = () => {
    alert(1);
  },
  list = [
    {
      key: 0,
      title: 'Ссылок нет',
    },
  ],
}) => {
  return (
    <div className={`${className}__content layout-1`}>
      <div className={`${className}__left  layout-1__left`}>
        <h2 className={`${className}__title  layout-1__text`}>{title}</h2>
        <ul className={`${className}__list  layout-1__list`}>
          {list.map((el) => (
            <li className={`${className}__item  layout-1__item`} key={el.key}>
              {el.title}
            </li>
          ))}
        </ul>
        <div className={`${className}__admin-panel`}>
          <h2>Админ панель</h2>
          <div className={`${className}__delete`}>Удалить запись</div>
          <div className={`${className}__fix`}>Редактировать</div>
          <BootstrapButton
            className={`${className}__button-admin  layout-1__button-admin`}
            onClick={onClickButton}
          >
            {textButton}
          </BootstrapButton>
        </div>
      </div>
      <div className={`${className}__rignt  layout-1__rignt`}>
        <NavLink to='/' className={`${className}__link  layout-1__link`}>
          <span>
            <svg
              viewBox='0 0 20 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.57129 12C6.57129 12.2151 6.65532 12.4301 6.82303 12.5941L12.1033 17.7538C12.4391 18.0821 12.9837 18.0821 13.3195 17.7538C13.6552 17.4257 13.6552 16.8937 13.3195 16.5654L8.64725 12L13.3193 7.43459C13.6551 7.10636 13.6551 6.57436 13.3193 6.24629C12.9836 5.9179 12.439 5.9179 12.1031 6.24629L6.82287 11.406C6.65513 11.57 6.57129 11.785 6.57129 12Z'
                fill='#FFC59E'
                stroke='#FFC59E'
              />
            </svg>
          </span>
          <h3>Назад</h3>
        </NavLink>
        {children}
      </div>
    </div>
  );
};

export default LayoutPage;
