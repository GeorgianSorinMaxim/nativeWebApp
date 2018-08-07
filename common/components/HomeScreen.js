// @flow

import React from 'react';

type Props = {
  data: Object,
  loading: boolean
};

const HomeScreen = ({ data, loading }: Props) => (
  <div className="container">
    {!loading ? (
      <div className="content">
        <h1 className="welcome">Hello 90poe!</h1>
        <p className="title">This is the 🕸 app</p>
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
