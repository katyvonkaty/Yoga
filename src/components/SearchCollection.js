import React from "react";


class SearchCollection extends React.Component {

state = {term: "Search for Collections"};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
 }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className = "ui form">
          <div className = "field">
          <label> Search for Collections </label>
            <input type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value})}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchCollection
