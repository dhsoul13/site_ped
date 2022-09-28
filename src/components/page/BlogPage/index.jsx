/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-empty-function */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React, { useState, useEffect, useCallback } from 'react';
import { blogLinks, textModificate } from '../../../helpers/pages/blog';
import Pagination from '@mui/material/Pagination';
import LayoutPage from '../../common/layout';
import CustomeSpiner from '../../common/spiner';
import { useDispatch } from 'react-redux';
import { addShowAddBlog } from '../../../store/slice/showAddBlogSlice';
import date from 'date-and-time';
import { getImgByUrl } from '../../../server/function/getImg';
import SpinerV2 from '../../common/spinerV2';

const BlogPage = ({ data = [] }) => {
  const dispath = useDispatch();
  const [blog, setBlog] = useState(data);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(5);
  const [listPhoto, setListPhoto] = useState([]);

  useEffect(() => {
    if (data.length) {
      setBlog(data);
      setTotal(data.length);
      setCurrent(1);
    } else {
      setBlog([]);
      setTotal(0);
      setCurrent(0);
    }
  }, [data]);

  const getUrlFunction = async () => {
    const url = await getImgByUrl({
      src: `blog/`,
      state: listPhoto,
      setState: setListPhoto,
    });
  };

  useEffect(() => {
    const data = getUrlFunction();
  }, []);

  /// отрезать эдементы
  const indexLastBlog = current * blogPerPage;
  const indexFirstBlog = indexLastBlog - blogPerPage;
  const currentBlog = blog.slice(indexFirstBlog, indexLastBlog);

  //   const classes = useStyles();

  /// появление модального окна добавления поста

  const handlerClick = useCallback(() => {
    dispath(addShowAddBlog());
  }, []);

  const getDate = (el) => {
    const time = new Date(el);
    const renderDate = date.format(time, 'YYYY/MM/DD HH:mm:ss');
    return renderDate;
  };

  const getUrlImg = (name) => {
    try {
      const photo = listPhoto.find((item) => {
        return item.name === name;
      });
      if (photo) {
        return photo.url;
      }
      return false;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='blog'>
      <div className='blog__container container'>
        <LayoutPage
          title='Блог'
          list={blogLinks}
          textButton='Добавить блог'
          onClickButton={handlerClick}
        >
          {data.length && listPhoto.length ? (
            <div className='blog__wrapper'>
              <div className='blog__pagination'>
                <Pagination
                  count={total / blogPerPage}
                  page={current}
                  shape='rounded'
                  hideNextButton
                  hidePrevButton
                  sx={{
                    '.Mui-selected': {
                      color: 'black',
                      backgroundColor: 'inherit!important',
                    },
                    button: {
                      fontSize: 25,
                      lineHeight: 30,
                      color: '#C3B9B5',
                    },
                  }}
                  onChange={(_, num) => {
                    setCurrent(num);
                  }}
                />
              </div>
              <ul className='blog__list'>
                {currentBlog.map((el) => (
                  <div className='blog__item' key={el.id}>
                    <div className='blog__card-item-img'>
                      {getUrlImg(el.photoUrl) ? (
                        <img src={getUrlImg(el.photoUrl)} alt='' />
                      ) : (
                        'Загрузка'
                      )}
                      <div className='blog__card-img-text'>
                        <div className='blog__card-teg'>{el.teg}</div>
                        <div className='blog__img-title'>{el.textPicture}</div>
                      </div>
                    </div>
                    <div className='blog__card-info'>
                      <h2 className='blog__card-title'>{el.title}</h2>
                      <h3 className='blog__card-data'>
                        {getDate(el.dateCreate)}
                      </h3>
                      <p className='blog__card-text'>
                        {textModificate(el.text)}
                      </p>
                    </div>
                  </div>
                ))}
              </ul>
              <div className='blog__pagination'>
                <Pagination
                  count={total / blogPerPage}
                  page={current}
                  shape='rounded'
                  sx={{
                    '.Mui-selected': {
                      color: 'black',
                      backgroundColor: 'inherit!important',
                    },
                    button: {
                      fontSize: 25,
                      lineHeight: 30,
                      color: '#C3B9B5',
                    },
                  }}
                  onChange={(_, num) => {
                    setCurrent(num);
                  }}
                />
              </div>
            </div>
          ) : (
            <>
              <SpinerV2 />
            </>
          )}
        </LayoutPage>
      </div>
    </div>
  );
};

export default BlogPage;
