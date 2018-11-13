import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
    // tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>Please add some tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // *******************************************************************************
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.state.value}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.handleIncrement(this.state.value)}
          // passing count as the argument but in reality we will
          // use the product ID of the shopping cart item
        >
          Increment
        </button>
        <br />
        {/* <div>{this.renderTags()}</div> */}
      </React.Fragment>
    );
  }
  // *******************************************************************************

  getBadgeClasses(value) {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
