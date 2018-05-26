import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import NewsList from './components/NewsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      articles: []
    }
    this.search = this.search.bind(this)
  }

  componentDidMount() {
    axios.get('/articles')
    .then(({data}) => {
      this.setState({
        articles: [{url: 'google.com', name: 'Hany News Article', text: 'hello body of text'}]
      })
    })
  }

  search (topic) {
    axios.post(`/articles/${topic}`, {
      query: topic
    })
    .then((reponse) => {
      
      return axios.get(`/articles/${topic}`, {params:{query:topic}})
    })
    .then(({data}) => {
      this.setState({
        articles: data
      })
    })
    // .then(data => console.log(data))
    .catch((err) => {
      console.error(err)
    })
  }

  render () {
    return (<div>
      <h1>Give me the latest on..</h1>
      <Search onSearch={this.search}/>
      <NewsList articles ={this.state.articles}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));