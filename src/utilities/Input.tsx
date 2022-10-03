interface Props {
  type: string,
  name: string,
  placeholder: string,
  onChange: any,
  value?: any
}
const Input: React.FC<Props> = ({ type, name, placeholder, onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className={name}> {(name === 'to' || name === 'start') ? placeholder : ""}</label>
      <input spellCheck={true} value={value} onChange={onChange} type={type} name={name} placeholder={placeholder}></input>
    </div>
  )
}

export default Input