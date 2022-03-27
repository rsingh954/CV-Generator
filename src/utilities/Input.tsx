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
      <label htmlFor={name} className={name}>{placeholder}</label>
      <input value={value} onChange={onChange} type={type} name={name} placeholder={placeholder}></input>
    </div>
  )
}

export default Input