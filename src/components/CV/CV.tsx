interface Props {
  data: any
}
const CV: React.FC<Props> = ({ data }) => {
  return (
    <div className="cvWrapper">
      <div className="header">
        <h1>Raja Singh</h1>
        <div className="contact">
          <span className="telephone">T: 123456789 </span>
          <span className="telephone">E: singhraja768@gmail.com </span>
          <span className="telephone">G: github.com/rsingh954 </span>
        </div>
      </div>
      <div className="experience">
        <h2>Position</h2>
        <h4>City</h4>
        <h5>Company</h5>
        <h6>Start</h6>
        <h6>To</h6>
        <h6>description</h6>
        <h6>description</h6>
        <h6>description</h6>
      </div>
      <div className="education">
        <h2>School Name</h2>
        <h4>City</h4>
        <h5>Degree</h5>
        <h6>Subject</h6>
        <h6>Start</h6>
        <h6>To</h6>
      </div>
    </div>
  )
}

export default CV