import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <form action="" className="input-group">
        <input
          placeholder="Get forecast in your favourite cities"
          className="form-control"
          onChange={ this.onInputChange }
          type="text" value={ this.state.term }
        />
        <span className="input-group-btn">
          <button className="btn btn-secundary" type="submit">Submit</button>
        </span>
      </form>
    );
  }
}
