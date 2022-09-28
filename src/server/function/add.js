/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
/* eslint-disable no-sequences */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { getDatabase, ref, set } from 'firebase/database';

export const addFromBd = async ({ showSpiner, exitPopUp, src, value }) => {
  try {
    const date = new Date();
    console.log(date);
    showSpiner({ boolean: true });
    const db = getDatabase();
    await set(ref(db, `${src}/${Date.now()}`), {
      text: value.text,
      textPicture: value.textPicture,
      teg: value.teg,
      title: value.title,
      photoUrl: value.photoUrl,
      dateCreate: date.toString(),
    })
      .then(() => {
        console.log('успешно');
        showSpiner({ boolean: false });
        exitPopUp();
      })
      .catch(() => {
        showSpiner({ boolean: false });
        throw new Error('Что то пошло не так');
      });
  } catch (e) {
    showSpiner({ boolean: false });
    console.log(e);
  }
};
