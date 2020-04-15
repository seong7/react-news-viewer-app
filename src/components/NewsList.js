import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

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

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160', // 원하는 사이즈의 img 를 띄워주는 링크
};

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true); // loadding 중인지 판단
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=ba6ad61e6af045cfb3d1bd99fca11187',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false); // loadding 완료됨으로 바꿈
    };

    fetchData(); // async 함수 호출
  }, []);

  // loading 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null; // 만약 articles 가 null 이면 null.map 에서 에러가 나므로 꼭 예외처리 해줌
  }
  // articles 값이 유효할 때
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

export default NewsList;
