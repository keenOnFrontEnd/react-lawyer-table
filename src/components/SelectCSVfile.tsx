import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { DropFileZone } from './Dropzone'

export const ImportData = () => {

  return (
    <div className='d-flex justify-content-center align-items-center pt-5 pe-3 pb-3'>
        <DropFileZone />
    </div>
  )
}
