import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as options from '../../apis/option'
import OptionInsert from '../../components/option/OptionInsert'

const OptionInsertContainer = () => {

  const navigate = useNavigate()

  const optionInsert = async (formData, headers) => {
    try {
      const response = await options.insert(formData, headers)
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