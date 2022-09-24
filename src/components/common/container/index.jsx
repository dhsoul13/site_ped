import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AuthMenu from '../authMenu';
import FooterForLayout from '../footer';
import HeaderForLayout from '../header';
import AddPopUp from '../../component/PopUp/addContant';
import AuthPopUp from '../../component/PopUp/auth';
import ChangeCity from '../../component/PopUp/changeCity';
import CustomeSpiner from '../spiner';

const ContainerCustome = () => {
  const { isShow } = useSelector((state) => state.ShowAuthPopUp);
  const isShowCity = useSelector((state) => state.ShowCity.isShow);
  const showAlert = useSelector((state) => state.ShowSpiner);
  const { isAuth } = useSelector((state) => state.Auth);
  const showAddBlog = useSelector((state) => state.ShowAddBlog);
  return (
    <div className='body'>
      {isShow ? <AuthPopUp /> : ''}
      {isShowCity ? <ChangeCity /> : ''}
      {showAlert.isShow ? <CustomeSpiner text={showAlert.text} /> : ''}
      {isAuth ? <AuthMenu /> : ''}
      {showAddBlog.isShow ? (
        <AddPopUp className='addPopUp' title='Добавить блог' />
      ) : (
        ''
      )}
      <HeaderForLayout />
      <main className='main'>
        <Outlet />
      </main>
      <FooterForLayout />
    </div>
  );
};

export default ContainerCustome;
