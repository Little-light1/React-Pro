const Input = ({ name, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        onChange(name, e.target.value);
      }}
    />
  );
};

export default Input;
