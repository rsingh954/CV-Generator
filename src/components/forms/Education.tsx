import EducationItem from "./EducationItem"
function Education(props: any) {
  const education = props.formData.map((educationItem: any) => (
    <EducationItem
      key={educationItem.id}
      formData={educationItem}
      handleChanges={props.handleChanges}
      id={educationItem.id}
      onDelete={props.onDelete}
      handleAddEducation={props.handleAddEducation}

    />
  ))
  return (

    <div className="education">
      {education}
      {/* <button type="button" onClick={props.handleAddEducation}>Add </button> */}
    </div>
  )
}

export default Education