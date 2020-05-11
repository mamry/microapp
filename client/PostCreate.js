import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post('http://posts.com:4000/posts/create', {
      title
    });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Share your products with the world</label>
        </div>
        <button type="button" class="btn btn-primary">Clothing</button>
        <button type="button" class="btn btn-secondary">Homemade</button>
        <button type="button" class="btn btn-success">Garden</button>
        <button type="button" class="btn btn-danger">Kitchen</button>
        <button type="button" class="btn btn-warning">Party</button>
        <button type="button" class="btn btn-info">Sport</button>
        <button type="button" class="btn btn-light">Shoes</button>
        <button type="button" class="btn btn-dark">Vehicles</button>
      </form>
    </div>
  );
};
