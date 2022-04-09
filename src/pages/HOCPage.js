import React from "react";

class HOCPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("classhocprops: ", props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h1>我是HOCPage</h1>
      </React.Fragment>
    );
  }
}

export default HOCPage;
