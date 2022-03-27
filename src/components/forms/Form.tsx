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
  const handleChangeExperience = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { name, value } = e.target

    setFormData((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value }
        }
        return experienceItem
      })
      return { ...prevState, experience: [...newExperience] }
    })
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
  const handleAddExperience = () => {
    setFormData((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: Date.now(),
          position: '',
          company: '',
          city: '',
          start: '',
          to: '',
        },
      ],
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
    <div className='appWrapper'>
      <form onSubmit={handleSubmit}>
        <Personal formData={formData} handleChanges={handlePersonalChanges} />
        <Experience handleAddExperience={handleAddExperience} formData={formData.experience} handleChanges={handleChangeExperience} />
        <Education formData={formData.education} handleChanges={handleEducationChanges} />
        <button type='submit'>Submit</button>
        <button type='reset' onClick={() => setFormData(emptyFormData)}>Reset</button>
      </form>
      <CV data={formData} />
    </div>
  )
}

export default Form