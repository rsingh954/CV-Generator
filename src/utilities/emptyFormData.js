export const emptyFormData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: "", //TODO: ADD DEFUALT AVATAR LOGO
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
