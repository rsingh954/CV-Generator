import Input from "../../utilities/Input"
function Education(props: any) {
  return (
    <div className="education">
      <h1>Education</h1>
      <Input value={props.formData.schoolName} onChange={(e: any) => props.handleChanges(e)} name="schoolName" type="text" placeholder="School Name" />
      <Input value={props.formData.city} onChange={(e: any) => props.handleChanges(e)} name="city" type="text" placeholder="City" />
      <Input value={props.formData.degree} onChange={(e: any) => props.handleChanges(e)} name="degree" type="text" placeholder="Degree" />
      <Input value={props.formData.subject} onChange={(e: any) => props.handleChanges(e)} name="subject" type='text' placeholder="Subject" />
      <Input value={props.formData.start} onChange={(e: any) => props.handleChanges(e)} name="start" type="date" placeholder="Start" />
      <Input value={props.formData.to} onChange={(e: any) => props.handleChanges(e)} name='to' type='date' placeholder="To" />

    </div>
  )
}

export default Education