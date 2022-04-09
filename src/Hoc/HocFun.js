export function HocFun(Component) {
  return function newComponent(props) {
    const state = {
      funHOC: "funHOC",
    };
    return (
      <div>
        <Component {...props} {...state} />
      </div>
    );
  };
}
