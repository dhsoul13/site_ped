/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React, { useState, useEffect, useCallback } from 'react';
import { blogLinks } from '../../../helpers/pages/blog';
import Pagination from '@mui/material/Pagination';
import LayoutPage from '../../common/layout';
import CustomeSpiner from '../../common/spiner';
import { createTheme } from '@mui/material';
import { theme } from '../../../helpers/theme';
import { useDispatch } from 'react-redux';
import { addShowAddBlog } from '../../../store/slice/showAddBlogSlice';

const BlogPage = ({ data = [] }) => {
  const dispath = useDispatch();
  const [blog, setBlog] = useState(data);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(5);

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

  /// отрезать эдементы
  const indexLastBlog = current * blogPerPage;
  const indexFirstBlog = indexLastBlog - blogPerPage;
  const currentBlog = blog.slice(indexFirstBlog, indexLastBlog);

  //   const classes = useStyles();

  /// появление модального окна добавления поста

  const handlerClick = useCallback(() => {
    dispath(addShowAddBlog());
  }, []);

  return (
    <div className='blog'>
      <div className='blog__container container'>
        <LayoutPage
          title='Блог'
          list={blogLinks}
          textButton='Добавить блог'
          onClickButton={handlerClick}
        >
          {data.length ? (
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
                      <img src={el.url} alt='' />
                      <div className='blog__card-logo'>logo</div>
                      <div className='blog__card-img-text'>
                        <div className='blog__card-teg'>тег</div>
                        <div className='blog__img-title'>title</div>
                      </div>
                    </div>
                    <div className='blog__card-info'>
                      <h2 className='blog__card-title'>{el.title}</h2>
                      <h3 className='blog__card-data'>дата</h3>
                      <p className='blog__card-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia eligendi eius a quisquam inventore architecto,
                        neque dolorum earum at asperiores voluptate doloribus
                        nulla animi in similique quae, saepe blanditiis quo!
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
            <CustomeSpiner />
          )}
        </LayoutPage>
      </div>
    </div>
  );
};

export default BlogPage;
