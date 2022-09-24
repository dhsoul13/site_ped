/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable object-shorthand */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './container/MainContainer';
import './assets/style/index.scss';
import { UpDataAuth } from './server/function/updata';
import { useDispatch } from 'react-redux';
import { AddAuth } from './store/slice/auth';
import CustomeSpiner from './components/common/spiner';
import ContainerCustome from './components/common/container';
import WriteContainer from './container/WriteContainer';
import { locationFromDb } from './server/function/location';
import { addLocationFromBd } from './store/slice/locationSlice';
import ContactContainer from './container/ContactContainer';
import BlogContainer from './container/BlogContainer';

const App = () => {
  const dispatch = useDispatch();
  const current = localStorage.getItem('location') || 'Москва';
  const [showSpiner, setShowSpiner] = useState(false);
  const userAuth = ({
    isAdmin,
    id,
    email,
    name,
    isEmail,
    isAuth,
    isDoctor,
    confirmedAdmin,
  }) => {
    dispatch(
      AddAuth({
        isAdmin,
        id,
        email,
        name,
        isEmail,
        isAuth,
        isDoctor,
        confirmedAdmin,
      })
    );
  };
  const location = (data) => {
    dispatch(
      addLocationFromBd({
        data: data,
        current: current,
      })
    );
  };
  useEffect(() => {
    async function one() {
      await locationFromDb(location);
      await UpDataAuth({ userAuth, setShowSpiner });
    }
    one();
  }, []);
  return (
    <>
      {showSpiner ? <CustomeSpiner /> : ''}
      <Routes>
        <Route path='/' element={<ContainerCustome />}>
          <Route index element={<MainContainer />} />
          <Route path='/write' element={<WriteContainer />} />
          <Route path='/contact' element={<ContactContainer />} />
          <Route path='/blog' element={<BlogContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
