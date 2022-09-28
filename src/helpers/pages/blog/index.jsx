/* eslint-disable prefer-template */
/* eslint-disable import/prefer-default-export */
export const blogLinks = [
  {
    key: 0,
    title: 'О нас',
  },
  {
    key: 1,
    title: 'Специалисты',
  },
];

export const textModificate = (text) => {
  let textRender = '';
  if (text.length > 150) {
    textRender = text.slice(0, 149) + '...';
    return textRender;
  }
  return text;
};
