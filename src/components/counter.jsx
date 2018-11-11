import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    this.setState({ count: this.state.count + 1 });
    console.log(product);
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>Please add some tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // *******************************************************************************
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>

        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.handleIncrement(this.state.count)}
          // passing count as the argument but in reality we will
          // use the product ID of the shopping cart item
        >
          Increment
        </button>

        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }
  // *******************************************************************************

  getBadgeClasses(count) {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
