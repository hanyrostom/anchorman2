import React from 'react';
import NewsList from './NewsList.jsx';

const ListItem = (props) => (
  <span>
    <a href={props.article.url}><img src={props.article.imageUrl}/></a>
    <span className='details'>
      <button >Save</button>
      <button>Go</button>
      <h4 className='title'>{props.article.title}</h4>
      <p className='description'>{props.article.description}</p>
    </span>
  </span>
 
)

export default ListItem;


/*(
  
  <p>
    { props.article.title }
    <img src={props.article.url} width="100" height="140"/>
  </p>
)*/
