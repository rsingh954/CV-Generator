interface Props {
  data: any
}
//need to destructure data object
/*
education: Array [ {…} ]
​​
0: Object { id: 1664256002710, schoolName: "", city: "", … }
​​
length: 1
​​
<prototype>: Array []
​
experience: Array [ {…} ]
​​
0: Object { id: 1664256002710, position: "", city: "xx", … }
​​
length: 1
​​
<prototype>: Array []
​
personalInfo: Object { firstName: "xxxxxx", lastName: "xxxxxx", address: "xxxxxx", … }
​​
address: "598 1ST AVE"
​​
email: "xxxxxxxx@gmail.com"
​​
firstName: "Satpal"
​​
lastName: "Singjh"
​​
phoneNumber: "xxxxxxx"
​​
photo: ""
​​
title: ""
*/
const CV: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <div className="cvWrapper">
      <div className="header">
        <h1>{data.personalInfo.firstName}</h1>
        <div className="contact">
          <span className="telephone">T: 123456789 </span>
          <span className="telephone">E: bingstings@gmail.com </span>
          <span className="telephone">G: github.com/whateva </span>
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