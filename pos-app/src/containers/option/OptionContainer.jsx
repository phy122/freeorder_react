import React, { useEffect, useState } from 'react'
import OptionList from '../../components/option/OptionList'
import * as options from '../../apis/option'

const OptionContainer = () => {

  const [optionList, setOptionList] = useState([])

  // 옵션 목록 불러오기
  const optionLoad = async () => {
    try {
      const response = await options.list()
      const data = response.data
      const status = response.status
      if(status == 200){
        setOptionList(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    optionLoad()
    return () => {}
  }, [])
  
  return (
    <>
    <OptionList
      optionList={optionList}
    />
    </>
  )
}

export default OptionContainer