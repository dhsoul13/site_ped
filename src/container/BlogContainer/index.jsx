import React, { useEffect, useState } from 'react';
import BlogPage from '../../components/page/BlogPage';
import { request } from '../../server/axios-req';

const BlogContainer = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fun = async () => {
      const card = await request({
        url: '/photos?_limit=50',
      });
      console.log(card);
      setData(card);
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
