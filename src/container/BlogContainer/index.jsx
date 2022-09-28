import React, { useEffect, useState } from 'react';
import BlogPage from '../../components/page/BlogPage';
import { request } from '../../server/axios-req';
import { readFromBd } from '../../server/function/readForBd';

const BlogContainer = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fun = async () => {
      const card = await request({
        url: '/photos?_limit=50',
      });

      await readFromBd({ src: 'blog', setData });

      // setData(card);
    };

    fun();
  }, []);
  return (
    <>
      <BlogPage data={data ?? []} />
    </>
  );
};

export default BlogContainer;
