const Input = props => {
  const { arg, onChange, placeholder } = props
  return <input id={arg} onChange={onChange} placeholder={placeholder} />
};
export default Input;
