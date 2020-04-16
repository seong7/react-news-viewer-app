import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // console.log('app');
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((nextCategory) => {
  //   setCategory(nextCategory);
  // }, []); // 처음 렌더링 될 때만 생성됨
  return (
    <>
      {/* Route 없이 onSelect 함수로 구현 */}
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
      {/*******************************************/}
      {/*                                         */}
      {/*******************************************/}
      {/* Route 로 구현 (onSelect 필요 없음) */}
      {/* 1. param 이용하는 방법 */}
      <Route path="/:category?" component={NewsPage} />
    </>
  );
};
export default App;

/*
 category 상태를 useState로 관리하겠습니다. 
 추가로 category 값을 업데이트하는 onSelect라는 함수 만들기
 그러고 나서 category와 onSelect 함수를 Categories 컴포넌트에게 
 props로 전달해 주세요. 
 또한, category 값을 NewsList 컴포넌트에게도 전달해 주어야 합니다.
*/
