/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-alert */

import { Navigate } from 'react-router-dom';

export function isAuthCheack({ isAuth, show, link }) {
  if (!isAuth) {
    show();
    return null;
  }
  return <Navigate to={link} />;
}
