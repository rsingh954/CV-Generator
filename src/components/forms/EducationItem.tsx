import Input from "../../utilities/Input"

function EducationItem(props: any) {
  return (
    <>
      <h1>Education</h1>
      <Input value={props.formData.schoolName} onChange={(e: any) => props.handleChanges(e, props.id)} name="schoolName" type="text" placeholder="School Name" />
      <Input value={props.formData.city} onChange={(e: any) => props.handleChanges(e, props.id)} name="city" type="text" placeholder="City" />
      <Input value={props.formData.degree} onChange={(e: any) => props.handleChanges(e, props.id)} name="degree" type="text" placeholder="Degree" />
      <Input value={props.formData.subject} onChange={(e: any) => props.handleChanges(e, props.id)} name="subject" type='text' placeholder="Subject" />
      <Input value={props.formData.start} onChange={(e: any) => props.handleChanges(e, props.id)} name="start" type="date" placeholder="Start" />
      <Input value={props.formData.to} onChange={(e: any) => props.handleChanges(e, props.id)} name='to' type='date' placeholder="To" />
      <button className="delete" onClick={(e: any) => props.onDelete(props.id)} >Delete</button>

    </>
  )
}

export default EducationItem