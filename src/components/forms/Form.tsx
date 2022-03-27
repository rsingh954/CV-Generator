import React, { useEffect, useState } from 'react'
import { emptyFormData } from '../../utilities/emptyFormData'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'
import CV from '../CV/CV'


const Form: React.FC = () => {

  const [formData, setFormData] = useState(emptyFormData)
  const [showCV, setShowCV] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)

    setShowCV(true)
    console.log(showCV)

  }

  const handlePersonalChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value, type } = e.target


    if (type === 'file') {
      console.log(e)
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
  const handleExperienceChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value, type } = e.target
    if (type === 'file') {
      return
    }
    setFormData((prevState) => ({
      ...prevState,
      experience: {
        ...prevState.experience,
        [name]: value
      },
    }))
  }
  const handleEducationChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value, type } = e.target
    if (type === 'file') {
      return
    }
    setFormData((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        [name]: value
      },
    }))
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
    <div>
      <form onSubmit={handleSubmit}>
        <Personal formData={formData} handleChanges={handlePersonalChanges} />
        <Experience formData={formData} handleChanges={handleExperienceChanges} />
        <Education formData={formData} handleChanges={handleEducationChanges} />
        <button type='submit'>Submit</button>
        <button type='reset' onClick={() => setFormData(emptyFormData)}>Reset</button>
      </form>
      {showCV === true ? <CV data={formData} /> : ""}
    </div>
  )
}

export default Form