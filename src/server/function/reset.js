/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty-pattern */
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { AuthError } from '../../helpers/error/auth';

export const reset = async ({
  email,
  next,
  spinerActive,
  spinerRemove,
  setError,
}) => {
  try {
    spinerActive();
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Отправлено');
        next();
        spinerRemove();
      })
      .catch((error) => {
        spinerRemove();
        const errorCode = error.code;
        const err = AuthError.find((el) => errorCode === el.err);
        setError(err ? err.errName : 'Непредвидимая ошибка');
        spinerRemove();
      });
  } catch (e) {
    console.log(e);
  }
};
