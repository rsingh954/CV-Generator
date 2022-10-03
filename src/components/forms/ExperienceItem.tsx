import Input from "../../utilities/Input"
function ExperienceItem(props: any) {
  return (
    <>
      <h1>Experience</h1>
      <Input value={props.formData.position} onChange={(e: any) => props.onChange(e, props.id)} type="text" name="position" placeholder="Position" />
      <Input value={props.formData.company} onChange={(e: any) => props.onChange(e, props.id)} name="company" type="text" placeholder="Company" />
      <Input value={props.formData.city} onChange={(e: any) => props.onChange(e, props.id)} name="description" type="text" placeholder="Description" />
      <Input value={props.formData.start} onChange={(e: any) => props.onChange(e, props.id)} name="start" type="date" placeholder="Start" />
      <Input value={props.formData.to} onChange={(e: any) => props.onChange(e, props.id)} name='to' type='date' placeholder="To" />
      <div className="btn-group">
        <button className="delete" onClick={(e: any) => props.onDelete(props.id)} >Delete</button>
        <button type="button" onClick={props.handleAddExperience}>Add </button>
      </div>


    </>
  )
}

export default ExperienceItem