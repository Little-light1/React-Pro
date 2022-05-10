/*
 * @Author: shimmer
 * @Date: 2022-04-28 09:46:03
 * @LastEditors: shimmer
 * @LastEditTime: 2022-05-10 08:59:01
 * @Description:
 *
 */
const Input = ({ name, value, change, onChange, type = "text", placeholder, max, maxLength }) => {
  return (
    <input
      max={max}
      maxLength={maxLength}
      value={value}
      type={type}
      placeholder={placeholder}
      onFocus={() => {}}
      onChange={(e) => {
        if (change) {
          change(name, e.target.value);
        } else if (onChange) {
          onChange(e);
        }
      }}
    />
  );
};

export default Input;
