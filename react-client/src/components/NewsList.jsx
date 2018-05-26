import React from 'react';
import ListItem from './ListItem.jsx';
import Search from './Search.jsx';

const NewsList = (props) => (
  <div className='main-list'>
    { props.articles.map(article => <ListItem key={article.id} article={article}/>)}
  </div>
)

export default NewsList;