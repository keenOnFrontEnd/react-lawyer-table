import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../context/store'

import s from '../styles/table.module.css'
import { DuplicateResult, findDuplicateInData } from '../utils/duplicates.utils'
import { convertStateNames, transformPhoneNumber } from '../utils/transformValues.utils'

export const Table = () => {

  let data = useSelector((state: RootState) => state.root.data)
  let isError = useSelector((state: RootState) => state.root.isError)
  let headers = useSelector((state: RootState) => state.root.headers)

  if (isError) {
    return <div className={`${s.error} d-flex justify-content-center align-items-center rounded `}>
      File format is not correct
    </div>
  }

  const findDuplicates = (email: string, phone: number | string, index: number): DuplicateResult => {
    const result: Array<DuplicateResult> = findDuplicateInData(email, phone, data, index);
    return result[0]
  };

  return (
    <div className={`${s.table} p-0`}>
      <table>
        <thead>
          <tr>
            {data.length ? <th>№</th> : null}
            {headers?.map((item: string, index) => <th key={index}>{item}</th>)}
            {data.length ? <th>Duplicate with</th> : null}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            let res: DuplicateResult = findDuplicates(item['Email'].value, item['Phone'].value, index)
            return <tr key={index}>
              <td>{index + 1}</td>
              <td className={`${!item['Full Name'].isValid ? s.tableTdError : ''}`}>{item['Full Name'].value}</td>
              <td className={`${res?.duplicate ? s.tableTdError : ''}`}>{transformPhoneNumber(item['Phone'].value)}</td>
              <td className={`${res?.duplicate ? s.tableTdError : ''}`}>{item['Email'].value}</td>
              <td className={`${!item['Age'].isValid ? s.tableTdError : ''}`}>{item['Age'].value}</td>
              <td className={`${!item['Experience'].isValid ? s.tableTdError : ''}`}>{item['Experience'].value}</td>
              <td className={`${!item['Yearly Income'].isValid ? s.tableTdError : ''}`}>{item['Yearly Income'].value.toFixed(2)}</td>
              <td className={`${!item['Has children'].isValid ? s.tableTdError : ''}`}>{item['Has children'].value === true ? 'TRUE' : 'FALSE'}</td>
              <td className={`${!item['License states'].isValid ? s.tableTdError : ''}`}>{convertStateNames(item['License states'].value)}</td>
              <td className={`${!item['Expiration date'].isValid ? s.tableTdError : ''}`}>{item['Expiration date'].value}</td>
              <td className={`${!item['License number'].isValid ? s.tableTdError : ''}`}>{item['License number'].value}</td>
              <td>{res?.duplicateIndex}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
