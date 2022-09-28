/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { getDatabase, ref, onValue } from 'firebase/database';

export const readFromBd = async ({ src, setData }) => {
  try {
    const db = getDatabase();
    const startCountRef = ref(db, `${src}/`);
    await onValue(startCountRef, async (snapshot) => {
      try {
        const data = await snapshot.val();
        const dataSetting = Object.entries(data).map((el) => {
          return {
            id: el[0],
            ...el[1],
          };
        });

        setData(dataSetting);
      } catch (e) {
        throw new Error(e);
      }
    });
  } catch (e) {
    console.log(e);
  }
};
