import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../context/store'

import s from '../app.module.css'
import { DuplicateResult, findDuplicateInData } from '../utils/Duplicates'

export const Table = () => {

  let data = useSelector((state: RootState) => state.root.data)
  let isError = useSelector((state: RootState) => state.root.isError)
  let headers = useSelector((state: RootState) => state.root.headers)

  if(isError) {
    return <div className={`${s.error}  d-flex justify-content-center align-items-center`}>
      File format is not correct
    </div>
  }

  const findDuplicates = (email: string, phone: string | number, currentIndex: number): number[] => {
    const duplicateIndices: number[] = [];
    for (let i = 0; i < data.length; i++) {
      if (i !== currentIndex) {
        const result: DuplicateResult = findDuplicateInData(email, phone, data);
        if (result.duplicate) {
          duplicateIndices.push(i + 1);
        }
      }
    }
    console.count()
    return duplicateIndices;
  };

  return (
    <div className={`${s.table} p-0`}>
      <table>
        <thead>
          <tr>
            <th>№</th>
            {headers?.map((item: string,index) => <th key={index}>{item}</th>)}
            <th>Duplicate with</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item,index) => 
          <tr key={index}>
            <td>{index + 1}</td>
            <td className={`${!item['Full Name'].isValid ? s.tableTdError : ''}`}>{item['Full Name'].value}</td>
            <td className={`${!item['Phone'].isValid ? s.tableTdError : ''}`}>{item['Phone'].value}</td>
            <td className={`${!item['Email'].isValid ? s.tableTdError : ''}`}>{item['Email'].value}</td>
            <td className={`${!item['Age'].isValid ? s.tableTdError : ''}`}>{item['Age'].value}</td>
            <td className={`${!item['Experience'].isValid ? s.tableTdError : ''}`}>{item['Experience'].value}</td>
            <td className={`${!item['Yearly Income'].isValid ? s.tableTdError : ''}`}>{item['Yearly Income'].value}</td>
            <td className={`${!item['Has children'].isValid ? s.tableTdError : ''}`}>{item['Has children'].value ? 'TRUE' : 'FALSE'}</td>
            <td className={`${!item['License states'].isValid ? s.tableTdError : ''}`}>{item['License states'].value}</td>
            <td className={`${!item['Expiration date'].isValid ? s.tableTdError : ''}`}>{item['Expiration date'].value}</td>
            <td className={`${!item['License number'].isValid ? s.tableTdError : ''}`}>{item['License number'].value}</td>
            <td>
               {findDuplicates(item['Email'].value, item['Phone'].value, index).join(', ')}
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
