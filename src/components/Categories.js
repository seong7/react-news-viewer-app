import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  &.active{
    font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
  }
  /* ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `} */
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ category, onSelect }) => {
  // console.log(category); // onselect 후 바뀐 category 확인
  const activeStyle = {
    fontWeight: '600',
    borderBottom: '2px solid #22b8cf',
    color: '#22b8cf',
  };

  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          // active={category === c.name}
          activeClassName="active"
          // onClick={() => {
          //   onSelect(c.name);
          // }}
          exact={c.name === 'all'}
          // all 일 때 exact 안해주면 모든 카테고리에서 "/" 는 포함되므로 "전체보기" 는 계속 active 됨
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
