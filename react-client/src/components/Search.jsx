import React from 'react';

class Search extends React.Component {
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      topic: ''
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
  }

  onChange (e) {
    this.setState({
      topic: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.topic);
  }

  render() {
    return (<div>
      <h4>We'll catch you up on everything you might've missed</h4>
      <p>Type in a topic of interest. ex: Apple, bitcoin.. etc.</p>
      <input value={this.state.topic} onChange={this.onChange}/>
      <button onClick={this.search}> What's new</button>
    </div>)
  }
}

export default Search;
