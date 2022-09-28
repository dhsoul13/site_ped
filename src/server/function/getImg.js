/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable-next-line no-unused-vars */
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';

export const getImgByUrl = async ({ src, state, setState }) => {
  try {
    setState([]);
    const storage = getStorage();
    const starsRef = ref(storage, src);
    await listAll(starsRef).then((url) => {
      url.items.forEach(async (item) => {
        const urlGet = await getDownloadURL(item);
        setState((prev) => [
          ...prev,
          {
            url: urlGet,
            name: item.name,
          },
        ]);
      });
    });
  } catch (e) {
    console.log(e);

    setState([]);
  }
};
