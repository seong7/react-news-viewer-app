import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160', // 원하는 사이즈의 img 를 띄워주는 링크
// };

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [loading, response, error] = usePromise(() => {
    const categoryQuery = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${categoryQuery}&apiKey=ba6ad61e6af045cfb3d1bd99fca11187`,
    );
  }, [category]);

  // component 가 렌더된 직후 호출됨
  // useEffect(() => {
  //   // async 를 사용하는 함수 따로 선언
  //   const fetchData = async () => {
  //     setLoading(true); // loadding 중인지 판단
  //     try {
  //       const categoryQuery = category === 'all' ? '' : `&category=${category}`;
  //       const response = await axios.get(
  //         `https://newsapi.org/v2/top-headlines?country=kr${categoryQuery}&apiKey=ba6ad61e6af045cfb3d1bd99fca11187`,
  //       );
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false); // loadding 완료됨으로 바꿈
  //   };

  //   fetchData(); // async 함수 호출
  // }, [category]);

  // 아직 articles 값이 설정되지 않았을 때 (가장 최초에 호출됨)
  if (!response) {
    // console.log('null');
    return null; // 만약 articles 가 null 이면 null.map 에서 에러가 나므로 꼭 예외처리 해줌
  }
  // loading 중일 때
  if (loading) {
    // console.log('loading');
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  // loading 도 아니고 articles 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle} /> */}
      {/* <NewsItem article={sampleArticle} /> */}
      {articles.map((article) => {
        return <NewsItem key={article.url} article={article} />;
      })}
    </NewsListBlock>
  );
};

export default React.memo(NewsList);
