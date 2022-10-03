import React, { useRef, useState,useEffect  } from 'react'
import { emptyFormData } from '../../utilities/emptyFormData'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'
import CV from '../CV/CV'


const Form: React.FC = () => {

  const [formData, setFormData] = useState(emptyFormData)
  const [showCV, setShowCV] = useState(false)

  useEffect(() => {
    //Runs only on the first render
    console.log(formData)
  }, [formData, showCV]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormData(formData)
    setShowCV(true)
  }

  const handlePersonalChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value, type } = e.target
    if (type === 'file') {
      handleChangeFile(e)
      return
    }
    setFormData((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }))
  }
  const handleChangeExperience = (e: React.ChangeEvent<HTMLInputElement>, id: any) => {
    const { name, value } = e.target

    setFormData((prevState) => {
      let newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value }
        }
        return experienceItem
      })
      return { ...prevState, experience: [...newExperience] }
  
    })
  }

  const handleEducationChanges = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData((prevState) => {
      const newEducation = prevState.education.map(educationItem => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value }
        }
        return educationItem
      })
      return { ...prevState, education: [...newEducation] }
    })
  }
  const handleAddExperience = () => {
    setFormData((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: Date.now(),
          position: '',
          company: '',
          description: '',
          start: '',
          to: '',
        },
      ],
    }))
  }
  const handleAddEducation = () => {
    setFormData((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
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
    }))
  }
  const handleDeleteExperience = (id: number) => {
    setFormData((prevState) => {
      const newExperience = prevState.experience.filter((experienceItem) => experienceItem.id !== id)
      return { ...prevState, experience: [...newExperience] }
    })
  }
  const handleDeleteEducation = (id: number) => {
    setFormData((prevState) => {
      const newEducation = prevState.education.filter((educationItem) => educationItem.id !== id)
      return { ...prevState, education: [...newEducation] }
    })
  }

  const handleChangeFile = (e: any) => {
    const { name } = e.target
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setFormData((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }))
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className='appWrapper'>
      <form onSubmit={handleSubmit}>
        <Personal formData={formData} handleChanges={handlePersonalChanges} />
        <Experience handleAddExperience={handleAddExperience} formData={formData.experience} handleChanges={handleChangeExperience} onDelete={handleDeleteExperience} />
        <Education handleAddEducation={handleAddEducation} formData={formData.education} handleChanges={handleEducationChanges} onDelete={handleDeleteEducation} />
        <div className="btn-group">
          <button type='submit'>Submit</button>
          <button type='reset' onClick={() => setFormData(emptyFormData)}>Reset</button>
        </div>

      </form>

      <CV data = {formData}  />
    </div>
  )
}

export default Form