import Input from "../../utilities/Input"

function Personal(props: any) {

  return (
    <div className="personal">
      <h1>Personal Info</h1>
      <Input value={props.formData.personalInfo.firstName} onChange={(e: any) => props.handleChanges(e)} name="firstName" type="text" placeholder="First Name" />
      <Input value={props.formData.personalInfo.lastName} onChange={(e: any) => props.handleChanges(e)} name="lastName" type="text" placeholder="Last Name" />
      <Input value={props.formData.personalInfo.email} onChange={(e: any) => props.handleChanges(e)} name="email" type="email" placeholder="Email" />
      <Input value={props.formData.personalInfo.title} onChange={(e: any) => props.handleChanges(e)} name="title" type="text" placeholder="Title" />
      <Input onChange={(e: any) => props.handleChanges(e)} name="photo" type='file' placeholder="Photo" />
      <Input value={props.formData.personalInfo.address} onChange={(e: any) => props.handleChanges(e)} name="address" type="text" placeholder="Address" />
      <Input value={props.formData.personalInfo.phoneNumber} onChange={(e: any) => props.handleChanges(e)} name='phoneNumber' type='phone' placeholder="Phone Number" />
    </div>
  )
}

export default Personal