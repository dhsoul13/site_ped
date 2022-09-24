/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, child, get } from 'firebase/database';

export const UpDataAuth = async ({ userAuth, setShowSpiner }) => {
  try {
    setShowSpiner(true);
    const auth = getAuth();
    const dbRef = ref(getDatabase());
    await onAuthStateChanged(auth, async (user) => {
      if (user) {
        await get(child(dbRef, `users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const { confirmed, role } = snapshot.val();
              console.log({
                isAdmin: false,
                id: user.uid,
                email: user.email,
                name: user.displayName,
                isEmail: user.emailVerified,
                isAuth: true,
                isDoctor: role === 'doctor',
                confirmedAdmin: confirmed,
              });
              userAuth({
                isAdmin: false,
                id: user.uid,
                email: user.email,
                name: user.displayName,
                isEmail: user.emailVerified,
                isAuth: true,
                isDoctor: role === 'doctor',
                confirmedAdmin: confirmed,
              });
            } else {
              console.log('No data available');
            }
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(user);
        if (user.emailVerified) {
          setShowSpiner(false);
        } else {
          setShowSpiner(false);
        }
      } else {
        setShowSpiner(false);
      }
    });
  } catch (e) {
    console.err(e);
  }
};
