import Input from "../../utilities/Input"

export default function Experience(props: any) {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <Input value={props.formData.position} onChange={(e: any) => props.handleChanges(e)} type="text" name="position" placeholder="Position" />
      <Input value={props.formData.company} onChange={(e: any) => props.handleChanges(e)} name="company" type="text" placeholder="Company" />
      <Input value={props.formData.city} onChange={(e: any) => props.handleChanges(e)} name="city" type="text" placeholder="City" />
      <Input value={props.formData.start} onChange={(e: any) => props.handleChanges(e)} name="start" type="date" placeholder="Start" />
      <Input value={props.formData.to} onChange={(e: any) => props.handleChanges(e)} name='to' type='date' placeholder="To" />
    </div>
  )
}
