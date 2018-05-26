import React from 'react';
import NewsList from './NewsList.jsx';

const ListItem = (props) => (
  <div>
    { props.article.description }
  </div>
)

export default ListItem;