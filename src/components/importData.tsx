import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { DropFileZone } from '../utils/Dropzone'

export const ImportData = () => {

    const selectFile = async () => {
    
    }


  return (
    <div className='d-flex justify-content-center align-items-center pt-5 pe-3 pb-3 border'>
        <DropFileZone />
    </div>
  )
}
