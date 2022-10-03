import dog from '../assets/dog.jpg'
let photo = ""
export const emptyFormData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: photo , //TODO: ADD DEFUALT AVATAR LOGO
    address: "",
    phoneNumber: "",
    email: "",
    //MIGHT ADD DESCRIPTION
  },
  experience: [
    {
      id: Date.now(),
      position: "",
      company: "",
      description: "",
      start: "", 
      to: "",
    },
  ],
  education: [
    {
      id: Date.now(),
      schoolName: "",
      city: "",
      degree: "",
      subject: "",
      start: "",
      to: "",
    },
  ],
};
export const exampleFormData = {
  personalInfo: {
    firstName: "Bing",
    lastName: "Bong",
    title: "Discord Moderator",
    photo: dog, //TODO: ADD DEFUALT AVATAR LOGO
    address: "123 55th Street, Compton CA",
    phoneNumber: "(123) 456-7891",
    email: "bing@gmail.com",
  },
  experience: [
    {
      id: Date.now(),
      position: "Discord Moderator",
      company: "Discord",
      description: "This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).",
      start: "2019", 
      to: "Present",
    },
    {
      id: Date.now(),
      position: "Discord User",
      company: "Discord",
      description: "The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.",
      start: "2019", 
      to: "2022",
    },
  ],
  education: [
    {
      id: Date.now(),
      schoolName: "Free Code Camp",
      city: "Birmingham, Alabama",
      degree: "Bachelors",
      subject: "Computer Science",
      start: "2019",
      to: "2022",
    },
  ],
};