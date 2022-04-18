import React from "react";
import ReactDOM from "react-dom";

class HOCPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 111,
    };
  }

  render() {
    const content = (
      <React.Fragment>
        <h1>我是HOCPage</h1>
      </React.Fragment>
    );
    return content;
  }
}

class HOCPageChild extends HOCPage {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  componentDidMount() {
    this.setState({
      num: 5,
    });
    this.setState({
      num: 4,
    });
  }

  render() {
    return (
      <div>
        {/*  react element */}
        {super.render()}
        <h1>我是HOCPageChild</h1>
        <h2>{this.state.num}</h2>
        <button
          onClick={() => {
            this.setState({ num: 15 });
            // flushSync提高优先级
            ReactDOM.flushSync(() => {
              this.setState({
                num: 20,
              });
            });

            this.setState({ num: 16 });
          }}
        >
          改变
        </button>
      </div>
    );
  }
}

export default HOCPageChild;
