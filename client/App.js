import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  return (
    <div className="container">
      <h1>Cairam</h1>
      <PostCreate />
      <hr />
      <h1>Items</h1>
      <PostList />
    </div>
  );
};
