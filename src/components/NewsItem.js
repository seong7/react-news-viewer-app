import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        // urlToImage 가 있을 경우에만 해당 .thumbnail div 를 출력한다.
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {/*  
              rel="noreferrer"
                사용자가 하이퍼링크를 클릭할 때 브라우저가 HTTP 리퍼러 헤더(referer header)를 전송해서는 안 됨을 명시함.
              
              target="_blank"
                새창 또는 새탭에 링크 페이지 열기

              rel="noopener"
                _blank 의 경우 보안 취약점이 존재하므로 꼭 사용해 보완해준다. (원리는 잘 모름)
          
            */}
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default React.memo(NewsItem);
