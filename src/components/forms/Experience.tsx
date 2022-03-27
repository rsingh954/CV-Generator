import Input from "../../utilities/Input"
import ExperienceItem from "./ExperienceItem"

export default function Experience(props: any) {
  const experience = props.formData.map((exp: any) => (
      < ExperienceItem
        key={exp.id}
        formData={exp}
        id={exp.id}
        onChange={props.handleChanges}
      />
  ))

  return (
    <div className="experience">
      {experience}
      <button type="button" onClick={props.handleAddExperience}>Add </button>
    </div>
  )
}
