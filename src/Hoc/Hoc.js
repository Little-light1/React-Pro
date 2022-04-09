import React from "react";

export function HOC(Component) {
  return class newComponent extends React.Component {
    //加入其他props
    state = {
      name: "hoc",
    };
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
}

// 1 强化 props ，可以通过 HOC ，向原始组件混入一些状态。
// 2 渲染劫持，可以利用 HOC ，动态挂载原始组件，还可以先获取原始组件的渲染树，进行可控性修改。
// 3 可以配合 import 等 api ，实现动态加载组件，实现代码分割，加入 loading 效果。
// 4 可以通过 ref 来获取原始组件实例，操作实例下的属性和方法。
// 5 可以对原始组件做一些事件监听，错误监控等。
