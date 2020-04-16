import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import NewsList_usePromise from '../components/NewsList_usePromise';

const NewsPage = ({ match }) => {
  console.log(match);

  /* param 사용 */
  // 카테고리가 선택되지 않았으면 기본값 all 사용
  const category = match.params.category || 'all';

  /* query 사용 */
  //   const cagtegory = location

  return (
    <>
      <Categories />
      {/* <NewsList category={category} /> */}
      <NewsList_usePromise category={category} />
    </>
  );
};

export default NewsPage;
