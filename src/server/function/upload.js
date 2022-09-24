import { getStorage } from '@firebase/storage';
import { ref, uploadBytes } from 'firebase/storage';

/* eslint-disable import/prefer-default-export */
export const uploadFile = async ({ info, showAlert }) => {
  showAlert({ boolean: true });
  const storage = getStorage();
  const imgRef = ref(storage, `blog/${info.name}_${Date.now()}`);
  // await uploadBytes(imgRef, info).then((data) => {
  //   showAlert({ boolean: false });
  //   return data.fullPath;
  // });

  const result = await uploadBytes(imgRef, info);
  showAlert({ boolean: false });
  return result;
};
