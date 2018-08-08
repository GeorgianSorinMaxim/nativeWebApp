// @flow

import React from 'react';
import styled from 'styled-components';

import { Styles } from '../Styles';

type Props = {
  data: Object,
  loading: boolean,
  platform: string
};

const Wrapper = styled.section`
  ${Styles.wrapper};
`;

const HomeScreen = ({ data, loading, platform }: Props) => (
  <div className="container">
    {!loading ? (
      <div className="content">
        <h1 className="welcome">Hello 90poe!</h1>
        <p className="title">This is the 🕸 app</p>
        <p className="title">{platform}</p>
        <Wrapper>This is an element styled with `styled-components`</Wrapper>
        <ul className="listContainer">
          {data.map(item => (
            <li className="listElement" key={item.id}>
              Title: {item.title}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Loading ... </p>
    )}
  </div>
);

export default HomeScreen;
