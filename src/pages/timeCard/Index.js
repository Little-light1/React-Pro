import React, { Component } from "react";
import Child from "./child";

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numArr: [],
      renderArr: [],
      position: { width: 0, height: 0 }, // 位置信息
    };
    this.box = React.createRef(null);
  }

  componentDidMount() {
    const { offsetHeight, offsetWidth } = this.box.current;
    const arr = new Array(10000).fill(1);
    const times = arr.length / 500;
    let index = 1;
    this.setState(
      {
        numArr: arr,
        position: {
          height: offsetHeight,
          width: offsetWidth,
        },
      },
      () => {
        this.renderList(index, times);
      }
    );
  }

  renderList(index, times) {
    if (index > times) return;
    const { renderArr } = this.state;
    renderArr.push(this.renderDom(index));
    this.setState({
      renderArr,
    });
    requestIdleCallback(() => {
      /* 用 requestIdleCallback 代替 setTimeout 浏览器空闲执行下一批渲染 */
      this.renderList(++index, times);
    });
  }

  renderDom(index) {
    const { numArr, position } = this.state;
    const list = numArr.slice((index - 1) * 500, index * 500);
    return (
      <React.Fragment key={index}>
        {list.map((item, index) => (
          <Child key={index} position={position} />
        ))}
      </React.Fragment>
    );
  }

  render() {
    const { renderArr } = this.state;
    return (
      <div ref={this.box} style={{ height: "97.5vh", width: "100%" }}>
        {renderArr}
      </div>
    );
  }
}
