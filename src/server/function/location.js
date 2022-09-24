/* eslint-disable dot-notation */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable-next-line no-restricted-syntax */
import { getDatabase, ref, onValue } from 'firebase/database';

export const locationFromDb = async (dispath) => {
  const db = getDatabase();
  await onValue(
    ref(db, '/location'),
    (snapshot) => {
      const obj = snapshot.val();
      const mas = [];
      for (let key in obj) {
        mas.push(obj[key]);
      }
      dispath(mas);
    },
    {
      onlyOnce: true,
    }
  );
};
