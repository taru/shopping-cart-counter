import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  // state is a special property in react components. object that includes any data that this component needs.

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {/* react frag is so we don't have 1 extra <div> within our root <div> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* m-2 is margin 2 spaces */}
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div>
          {this.state.tags.length === 0 && "Please create a new tag"}
          {/* truesy operand,JS engine will return last operand every time when comparing multiple truesy operands */}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
    // return gives React.createElement(parentElement, "content").
    // this is why we import react at the top
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
