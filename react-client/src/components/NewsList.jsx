import React from 'react';
import ListItem from './ListItem.jsx';
import Search from './Search.jsx';

const NewsList = (props) => (
  <div>
    <h4>We've got news</h4>
    There are { props.articles.length } items.
    { props.articles.map(article => <ListItem article={article}/>)}
  </div>
)

export default NewsList;