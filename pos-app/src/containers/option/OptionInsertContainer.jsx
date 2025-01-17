import React from 'react'
import OptionInsert from '../../components/option/OptionInsert'
import { useNavigate } from 'react-router-dom'

const OptionInsertContainer = () => {

  const navigate = useNavigate()

  const optionInsert = async (formData, headers) => {
    try {
      const response = await option.insert(formData, headers)
      const data = await response.data
      console.log(data)
      alert('등록 완료')
      navigate('/options')

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <OptionInsert
      optionInsert={optionInsert}
    />
    </>
  )
}

export default OptionInsertContainer