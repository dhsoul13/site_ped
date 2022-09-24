/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { AuthError } from '../../helpers/error/auth';

export const RegistrationFun = async ({
  email,
  password,
  name,
  show,
  remove,
  setError,
  showPopApp,
  type,
}) => {
  try {
    const auth = getAuth();
    const db = getDatabase();
    show({
      text: 'Подтвердите почту',
    });
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(async () => {
            console.log(type);
            const role = type ? 'doctor' : 'user';
            const confirmed = !type;
            await set(ref(db, `users/${userCredential.user.uid}`), {
              role,
              confirmed,
            });
            await sendEmailVerification(userCredential.user, {
              url: 'http://localhost:3000',
            }).catch((err) => {
              throw err;
            });
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });

    const checkFun = await setInterval(() => {
      auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        console.log('Email Verified!');
        remove();
        showPopApp();
        clearInterval(checkFun);
      } else {
        console.log('Email not Verifiend!');
      }
    }, 1000);
  } catch (error) {
    remove();
    const errorCode = error.code;
    const err = AuthError.find((el) => errorCode === el.err);
    setError(err ? err.errName : 'Непредвидимая ошибка');
  }
};
