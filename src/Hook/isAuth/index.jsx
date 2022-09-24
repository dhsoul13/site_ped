// /* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable no-unused-vars */
// import { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addShow } from '../../store/slice/showPopUp';

// // eslint-disable-next-line import/prefer-default-export
// export const useAuthLink = (to = '/') =>
//   useCallback(() => {
//     const dispatch = useDispatch();
//     const { isAuth } = useSelector((state) => state.Auth);
//     if (!isAuth) {
//       dispatch(addShow());
//     } else {
//       return;
//     }
//   }, []);
