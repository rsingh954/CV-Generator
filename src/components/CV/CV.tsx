import { FaRegMap, FaEnvelope, FaPhone } from 'react-icons/fa'

interface Props {
  data: any
}

const CV: React.FC<Props> = ({ data }) => {
  console.log(data.experience)
  return (
    <div className="cvWrapper">
      <div className="header">
        <h1>{data.personalInfo.firstName + " " + data.personalInfo.lastName}</h1>
        <span>{data.personalInfo.title}</span>
      </div>
      <main>
      <div className="left" >
        <div className="contact">
          <img src={data.personalInfo.photo} alt='' />
          <div className="heading">Contact Me</div>
          <span className="telephone"><FaPhone/> {data.personalInfo.phoneNumber} </span>
          <span className="email"><FaEnvelope/> {data.personalInfo.email} </span>
          <span className="cv-address"><FaRegMap /> 
          <p>{data.personalInfo.address}</p>
           </span>
        </div>
      </div>
      
      <div className="right" >
      <div className="heading">Work Experience</div>
        {data.experience.map((exp :any) => (
        <div className="cv-experience">
          <h2>{exp.position}</h2>
          <span>{exp.company}</span>
          <div>{exp.description}</div>
          <div>{exp.start + "- " + exp.to}</div>
        </div>
        ))}
      <div className="heading">Education</div>
      {data.education.map((edu: any) => (
      <div className="cv-education">
        <h2> {edu.schoolName}</h2>
        <div> {edu.city}</div>
        <div> {edu.degree}</div>
        <div> {edu.subject}</div>
        <div>{edu.start + "- " + edu.to}</div>
      </div>
      ))}
      {/* <div className="cv-education">
        <h2> {data.education[0].schoolName}</h2>
        <div> {data.education[0].city}</div>
        <div> {data.education[0].degree}</div>
        <div> {data.education[0].subject}</div>
        <div>{data.education[0].start + "- " + data.education[0].to}</div>
      </div> */}

      </div>
      </main>
    </div>
  )
}

export default CV