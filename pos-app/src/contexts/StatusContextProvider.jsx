import React, { createContext, useEffect, useState } from 'react'
import * as servers from '../apis/server';

export const StatusContext = createContext();

const StatusContextProvider = ({children}) => {

  const [systemStatus, setSystemStatus] = useState([])

  const serverGet = async () =>{
    const response = await servers.statusGet()
    const data = response.data
    const status = response.status
    // console.dir(data)
    if(status == 200){
      setSystemStatus(data)
    }
  }
  
  useEffect(() => {
    serverGet()
  }, [])
  
  return (
    <StatusContext.Provider value={ { systemStatus , serverGet } }>
      {children}
    </StatusContext.Provider>
  )
}

export default StatusContextProvider