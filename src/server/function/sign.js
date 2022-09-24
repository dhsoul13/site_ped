/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthError } from '../../helpers/error/auth';

export const sign = async ({
  email,
  password,
  setError,
  show,
  remove,
  showPopApp,
}) => {
  const auth = getAuth();
  show({
    text: 'Ожидание',
  });
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log(userCredential);
      remove();
      showPopApp();
      // ...
    })
    .catch((error) => {
      remove();
      const errorCode = error.code;
      console.log(errorCode);
      const err = AuthError.find((el) => errorCode === el.err);
      setError(err ? err.errName : 'Непредвидимая ошибка');
    });
};
